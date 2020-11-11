let express = require('express');
const app = module.exports = express();
const mysql = require('mysql');

const con = mysql.createConnection({   
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});
con.query(`CREATE DATABASE IF NOT EXISTS gardenify;`);


// Establish the database connection.
let connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: 'gardenify',
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
const user_create = require('../_backend/user_service/_database/_create');
const db_init = require('../_backend/_common/db_init');

app.use(plant_create);
app.use(user_create);
<<<<<<< HEAD
app.use(user_init);
=======
app.use(db_init);
>>>>>>> f9a782237de3deefc2b83f43dc8068a04377d684
