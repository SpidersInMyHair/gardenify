let express = require('express');
const app = module.exports = express();
const mysql = require('mysql');

// Establish the database connection.
let connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  multipleStatements: true
});
connection.connect((err: any) => {
  if (err) {
    console.error('> Database connection failed: ' + err.stack);
    console.error('Ensure that you have setup MySQL as described in the README');
    throw err;
  }
  console.log('> Connected to MySQL');
});
module.exports.connection = connection;

// Run the Create and Init Scripts.
const plant_create = require('../_backend/plant_service/_database/_create');
const plant_init = require('../_backend/plant_service/_database/_init');

app.use(plant_create);
app.use(plant_init);