express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(`                                                    \
  DROP DATABASE IF EXISTS gardenify_user;                             \
  CREATE DATABASE IF NOT EXISTS gardenify_user;                       \
  USE gardenify_user;                                                 \
  DROP TABLE IF EXISTS users;                                         \
  CREATE TABLE IF NOT EXISTS users (                                  \
    _id         int           NOT NULL   AUTO_INCREMENT,              \
    id          char(12)      UNIQUE     NOT NULL,                    \
    email       varchar(64)   UNIQUE     NOT NULL,                    \
    password    char(64)      NOT NULL,                               \
    PRIMARY KEY (_id)                                                 \
  );                                                                  \
  DROP TABLE IF EXISTS sessions;                                      \    
  CREATE TABLE IF NOT EXISTS sessions (                               \
    user_id     int           NOT NULL,                               \
    session_key char(64),                                             \
    FOREIGN KEY (user_id) REFERENCES users(_id)                       \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Created DATABASE gardenify_user');
});
