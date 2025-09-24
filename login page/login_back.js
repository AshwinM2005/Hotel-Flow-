const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

// First install: npm install cors
const cors = require('cors');

const app = express();  // Define app first
app.use(cors());        // Then use it
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
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send("All fields required");
    }

    // hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO login_user_data (User_Name, Email, Password) VALUES (?, ?, ?)";
    connection.query(query, [username, email, hashedPassword], (err, result) => {

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
