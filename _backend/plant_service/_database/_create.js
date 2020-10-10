const express = require('express');
module.exports = express();

const connection = require('../../../_repository/_config').connection;

connection.query(`                                                \
  DROP DATABASE IF EXISTS plant;                                      \
  CREATE DATABASE IF NOT EXISTS plant;`
, (err) => {
  if (err) throw err;
  console.log('> MySQL: Created plant database');
});