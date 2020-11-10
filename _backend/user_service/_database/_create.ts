express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(`                                        \
  DROP TABLE IF EXISTS sessions;                          \ 
  DROP TABLE IF EXISTS profiles;                          \   
  DROP TABLE IF EXISTS users;                             \
  CREATE TABLE IF NOT EXISTS users (                      \
    id          BINARY(16)    UNIQUE     NOT NULL,        \
    email       varchar(64)   UNIQUE     NOT NULL,        \
    password    char(64)      NOT NULL,                   \
    PRIMARY KEY (id)                                      \
  );                                                      \
  CREATE TABLE IF NOT EXISTS sessions (                   \
    user_id     BINARY(16)      UNIQUE    NOT NULL,       \
    session_key BINARY(16),                               \
    FOREIGN KEY (user_id) REFERENCES users(id)            \
  );                                                      \
  CREATE TABLE IF NOT EXISTS profiles (                   \
    user_id     BINARY(16)      NOT NULL,                 \
    name        varchar(64) ,                             \
    description varchar(256),                             \
    image_url   varchar(256),                             \
    FOREIGN KEY (user_id) REFERENCES users(id)            \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Created user tables');
});
