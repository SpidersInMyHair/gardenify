express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(`                                                            \
  USE gardenify_user;                                                         \
  INSERT INTO users (id, email, password)                                     \
  VALUES (                                                                    \
    "root",                                                                   \
    "root@gardenify.com",                                                     \
    "aa1d14e95d68f8c2d5539450318d42f56ab54e396018c4197cfc88d941954cb8"        \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Initialized DATABASE users');
});