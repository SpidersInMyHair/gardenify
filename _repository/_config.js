const express = require('express');
const app = module.exports = express();
const mysql = require('mysql');

// Establish the database connection.
connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  multipleStatements: true
});
connection.connect(err => {
  if (err) {
    console.error('> Database connection failed: ' + err.stack);
    console.error('Ensure that you have setup MySQL as described in the README');
    throw err;
  }
  console.log('> Connected to MySQL');
});
module.exports.connection = connection;

// Run the Create and Init Scripts.
const users = require('../_backend/plant_service/_database/_create');

app.use(users);