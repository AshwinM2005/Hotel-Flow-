// mauryashwin2005@gmail.com  4236


const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
require('dotenv').config({path:"../.env"});
const jwt = require("jsonwebtoken");
const cors = require('cors');

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

// MySQL Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL");
});

// API route to register user
app.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;

    email = email.toLowerCase();

    // hash password 
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO login_user_data (User_Name, Email, Password, Type) VALUES (?, ?, ? ,? )";
    connection.query(query, [username, email, hashedPassword, "User"], (err, result) => {

      if (err) {
    console.error(err);

    // Check for common MySQL errors
    if (err.code === "ER_DUP_ENTRY") {
    // Duplicate email or username
    return res.status(400).json("❌ This email or username is already registered!");
    }
    // Generic server error
    return res.status(500).json("⚠️ Unable to save user. Please try again later.");
  }

  // Success
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
  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json("⚠️ Server error while fetching user.");
    }

    if (results.length === 0) {
      return res.status(404).json("⚠️ Server error while fetching user.");
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

  connection.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }

    res.json(results[0]);
  });
}); 