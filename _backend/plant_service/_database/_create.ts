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
    UNIQUE (genus, species)                                           \
  );                                                                  \
  DROP TABLE IF EXISTS plant_items;                                   \
  CREATE TABLE IF NOT EXISTS plant_items (                            \
    plant_variety_id  char(12)      NOT NULL,                         \
    item_name         varchar(255)  NOT NULL,                         \
    quantity          int,                                            \
    unit              ENUM('gram', 'liter'),                          \
    FOREIGN KEY (plant_variety_id) REFERENCES plant_varieties(id)     \
  );                                                                  \
  DROP TABLE IF EXISTS plant_instructions;                            \
  CREATE TABLE IF NOT EXISTS plant_instructions (                     \
    plant_variety_id  char(12)      NOT NULL,                         \
    step_number       int           NOT NULL,                         \
    instruction       VARCHAR(1024) NOT NULL,                         \
    FOREIGN KEY (plant_variety_id) REFERENCES plant_varieties(id),    \
    UNIQUE (plant_variety_id, step_number)                            \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Created DATABASE plant');
});
