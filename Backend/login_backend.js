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


app.get("/booking", verifyToken, (req, res) => {
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