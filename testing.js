const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',      // usually localhost
  user: 'Maurya',
  password: '4236',
  database: 'hotel_management_system'
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});
