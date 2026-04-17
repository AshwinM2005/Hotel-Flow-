// mauryashwin2005@gmail.com  4236

import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import db_connection from "./config/db_connection.js";


const app = express();  
app.use(cors());       
app.use(bodyParser.json());

const verifyToken = (req, res, next)=>{
  const header = req.headers.authorization;
  if(!header){
    return res.status(403).json({message:"token not found"});
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    req.user = decoded ; 
    next()
  } catch {
    return res.status(401).json({message:"Invalid token"});
  }
};

// API route to register user
app.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;

    email = email.toLowerCase();

    // hash password 
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO login_user_data (User_Name, Email, Password, Type) VALUES (?, ?, ? ,? )";
    db_connection.query(query, [username, email, hashedPassword, "User"], (err, result) => {

      if (err) {
    console.error(err);
    if (err.code === "ER_DUP_ENTRY") {
    return res.status(400).json("❌ This email or username is already registered!");
    }
    
    return res.status(500).json("⚠️ Unable to save user. Please try again later.");
  }

  res.json("✅ User registered successfully!");
});    
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json("Server error: " + error.message);
  }
});

app.listen(process.env.PORT, () => console.log("🚀 Server running on http://localhost:3000"));

// ##################################################################################

// API route to login user
app.post("/login", (req, res) => {
  let { email, password } = req.body;

  email = email.toLowerCase();

  // Fetch user by email
  const query = "SELECT * FROM login_user_data WHERE Email = ?";
  db_connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json("⚠️ Server error while fetching user.");
    }

    if (results.length === 0) {
      return res.status(404).json("⚠️  error while fetching user.");
    }

    const user = results[0];

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(401).json("❌ Incorrect password!");
    }

    // Successful login
    const token= jwt.sign(
      {id:user.Id , email:user.Email},
      process.env.JWT_SECRET,
      {expiresIn:"1h"}
    );
    res.json({
      message: "Login successful",
      token,
       user: {
        id: user.Id,
        username: user.User_Name,
        email: user.Email
      }
    });
  });
});

app.get("/dashboard", verifyToken, (req, res) => {
  const userId = req.user.id;

  const query = "SELECT Id, User_Name, Email, Type FROM login_user_data WHERE Id = ?";

  db_connection.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }

    res.json(results[0]);
  });
}); 

// ################### GET ALL ROOMS #############################

//  room types ################
app.get("/room_types", verifyToken, (req, res) => {
  const query = `SELECT * FROM room_types`;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching rooms" });
    }

    res.json(results);
  });
});

// rooms ###################

app.get("/rooms", verifyToken, (req, res) => {
  const query = `SELECT * FROM rooms`;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching rooms" });
    }

    res.json(results);
  });
});

// rooms available ###############

app.get("/rooms/available", verifyToken, (req, res) => {
  const query = `SELECT 
    room_types.type,
    COUNT(*) AS available_count
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
    WHERE rooms.status = 'available'
    GROUP BY room_types.type`;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching rooms" });
    }

    const formatted = {};
    results.forEach(r => {
      formatted[r.type] = r.available_count;
    });

    res.json(formatted);
  });
});

// ############################### Booking ###################


app.post("/booking", verifyToken, (req, res) => {
  const { room_type_id, check_in, check_out, payment_amount } = req.body;
  const user_id = req.user.id;

  // 🔴 Validation
  if (!room_type_id || !check_in || !check_out) {
    return res.status(400).json({ message: "Missing data" });
  }

  db_connection.beginTransaction((err) => {
    if (err) {
      return res.status(500).json({ message: "Transaction error" });
    }

    // 🔒 Step 1: Get ONE available room of that type
    const lockQuery = `
      SELECT * FROM rooms
      WHERE room_type_id = ? AND status = 'available'
      LIMIT 1
      FOR UPDATE
    `;

    db_connection.query(lockQuery, [room_type_id], (err, roomResult) => {
      if (err) {
        return db_connection.rollback(() => {
          res.status(500).json({ message: "Lock error" });
        });
      }

      if (roomResult.length === 0) {
        return db_connection.rollback(() => {
          res.status(400).json({ message: "No rooms available for this type" });
        });
      }

      const actualRoomId = roomResult[0].id;

      // 🔍 Step 2: Check overlapping bookings
      const checkBookingQuery = `
        SELECT * FROM bookings
        WHERE room_id = ?
        AND check_out > ?
        AND check_in < ?
      `;

      db_connection.query(
        checkBookingQuery,
        [actualRoomId, check_in, check_out],
        (err, bookingResult) => {
          if (err) {
            return db_connection.rollback(() => {
              res.status(500).json({ message: "Check failed" });
            });
          }

          if (bookingResult.length > 0) {
            return db_connection.rollback(() => {
              res.status(400).json({
                message: "Room already booked for these dates"
              });
            });
          }

          // ✅ Step 3: Insert booking
          const insertQuery = `
            INSERT INTO bookings 
            (user_id, room_id, check_in, check_out, payment_amount)
            VALUES (?, ?, ?, ?, ?)
          `;

          db_connection.query(
            insertQuery,
            [user_id, actualRoomId, check_in, check_out, payment_amount],
            (err, result) => {
              if (err) {
                return db_connection.rollback(() => {
                  res.status(500).json({ message: "Booking failed" });
                });
              }

              // 🔥 Step 4: Update ONLY that room
              const updateRoomQuery = `
                UPDATE rooms 
                SET status = 'occupied'
                WHERE id = ?
                LIMIT 1
              `;

              db_connection.query(updateRoomQuery, [actualRoomId], (err, updateResult) => {
                if (err) {
                  return db_connection.rollback(() => {
                    res.status(500).json({ message: "Update failed" });
                  });
                }

                if (updateResult.affectedRows === 0) {
                  return db_connection.rollback(() => {
                    res.status(400).json({ message: "Room update failed" });
                  });
                }

                // ✅ Step 5: Commit
                db_connection.commit((err) => {
                  if (err) {
                    return db_connection.rollback(() => {
                      res.status(500).json({ message: "Commit failed" });
                    });
                  }

                  res.json({
                    message: "Booking successful",
                    room_allocated: actualRoomId,
                    booking_id: result.insertId
                  });
                });
              });
            }
          );
        }
      );
    });
  });
});

// my-bookings ##########
app.get("/booking/my_bookings" , verifyToken , (req, res)=>{
  const query = `
    SELECT 
      bookings.id AS booking_id,
      bookings.check_in,
      bookings.check_out,
      bookings.payment_amount,
      rooms.room_number,
      room_types.type AS room_type,
      room_types.image
    FROM bookings
    JOIN rooms ON bookings.room_id = rooms.id
    JOIN room_types ON rooms.room_type_id = room_types.id
    WHERE bookings.user_id = ?
    ORDER BY bookings.id DESC;
    `
  const user_id = req.user.id;
db_connection.query(query , [user_id] , (err , result)=>{
  if(err){
    console.error(err);
    return res.status(500).json({message : "failed to fetch bookings"})
  }
  res.json(result);
});
});


// ########################################################################
//               ##              Admin               ##
// ########################################################################


app.get("/admin/room-stats", verifyToken, (req, res) => {
  const query = `
    SELECT status, COUNT(*) AS count
    FROM rooms
    GROUP BY status
  `;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching room stats" });
    }

    // Default structure (important if some status is missing)
    const stats = {
      occupied: 0,
      reserved: 0,
      available: 0,
      not_ready: 0
    };

    results.forEach(r => {
      stats[r.status] = r.count;
    });

    res.json(stats);
  });
});

// ################ bookings count ##############

app.get("/admin/new-bookings-count", verifyToken, (req, res) => {
  const query = `
    SELECT COUNT(*) AS count
    FROM bookings
    WHERE created_at >= NOW() - INTERVAL 30 DAY
  `;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching bookings" });
    }

    res.json({ count: results[0].count });
  });
});

// ################# revenue ##################

app.get("/admin/revenue", verifyToken, (req, res) => {
  const query = `
    SELECT SUM(payment_amount) AS total_revenue
    FROM bookings
    WHERE created_at >= NOW() - INTERVAL 30 DAY
  `;

  db_connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching revenue" });
    }

    res.json({
      revenue: results[0].total_revenue || 0
    });
  });
});

// ################## staff stats #################

app.get("/admin/staff-stats", verifyToken, (req, res) => {
  const query = `
    SELECT status, COUNT(*) AS count
    FROM staff
    GROUP BY status
  `;

  db_connection.query(query, (err, results) => {
    if (err) return res.status(500).json(err);

    const stats = {
      total: 0,
      active: 0,
      on_leave: 0,
      disabled: 0
    };

    results.forEach(r => {
      stats[r.status] = r.count;
      stats.total += r.count;
    });

    res.json(stats);
  });
});

// ############################  fetch staff  #############

app.get("/admin/staff", verifyToken, (req, res) => {
  const { role, status, shift } = req.query;

  let query = "SELECT * FROM staff WHERE 1=1";
  let values = [];

  if (role) {
    query += " AND role = ?";
    values.push(role);
  }

  if (status) {
    query += " AND status = ?";
    values.push(status);
  }

  if (shift) {
    query += " AND shift = ?";
    values.push(shift);
  }

  db_connection.query(query, values, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// #####################  add staff  #####################

app.post("/admin/staff", verifyToken, (req, res) => {
  const { name, email, phone, role, shift, status } = req.body;

  const query = `
    INSERT INTO staff (name, email, phone, role, shift, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db_connection.query(
    query,
    [name, email, phone, role, shift, status || 'active'],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Staff added successfully" });
    }
  );
});