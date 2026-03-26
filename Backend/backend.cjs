// mauryashwin2005@gmail.com


const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

const cors = require('cors');

const app = express();  
app.use(cors());       
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "Maurya",
  password: "4236",
  database: "hotel_management_system"
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
    return res.status(400).send("❌ This email or username is already registered!");
    }
    // Generic server error
    return res.status(500).send("⚠️ Unable to save user. Please try again later.");
  }

  // Success
  res.send("✅ User registered successfully!");
});    

    
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error: " + error.message);
  }
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));

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
      return res.send("⚠️ Server error while fetching user.");
    }

    if (results.length === 0) {
      return res.send("❌ No account found with this email.");
    }

    const user = results[0];

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.send("❌ Incorrect password!");
    }

    // Successful login
    res.send("✅ Login successful! Welcome " + user.User_Name + "!");
   
  });
});
