require('dotenv').config()
const mysql = require("mysql2");
//TODO: change to Environment variables

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server with Heroku.");
});

// Create a pool connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connection;


// http://localhost:3000/api/v1/pokedex/trainers
//         host  puerto api version nombre ruta
