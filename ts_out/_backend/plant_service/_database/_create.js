express = require('express');
module.exports = express();
connection = require('../../../_repository/_config').connection;
connection.query(`                                                    \
  DROP DATABASE IF EXISTS plant;                                      \
  CREATE DATABASE IF NOT EXISTS plant;                                \
  USE plant;                                                          \
  DROP TABLE IF EXISTS plant_varieties;                               \
  CREATE TABLE IF NOT EXISTS plant_varieties (                        \
    _id         int           NOT NULL   AUTO_INCREMENT,              \
    id          char(12)      UNIQUE     NOT NULL,                    \
    genus       varchar(255)  NOT NULL,                               \
    species     varchar(255)  NOT NULL,                               \
    description varchar(1024),                                        \
    PRIMARY KEY (_id),                                                \
    UNIQUE (genus, species)
  );`, (err) => {
    if (err)
        throw err;
    console.log('> MySQL: Created DATABASE plant');
});
//# sourceMappingURL=_create.js.map