express = require('express');
module.exports = express();

require('../../../_repository/_config').connection;

connection.query(` \
  INSERT INTO users (id, email, password) \
  VALUES ( \
    "root", \
    "root@gardenify.com", \
    "aa1d14e95d68f8c2d5539450318d42f56ab54e396018c4197cfc88d941954cb8" \
  );`
  , (err: any) => {
    if (err) throw err;
    console.log('> MySQL: Initialized users tables');
  });