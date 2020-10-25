express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(`                                                    \
  DROP TABLE IF EXISTS plant_items;                                   \
  DROP TABLE IF EXISTS plant_instructions;                            \
  DROP TABLE IF EXISTS plant_scientific_details;                      \
  DROP TABLE IF EXISTS plant_varieties;                               \
  CREATE TABLE IF NOT EXISTS plant_varieties (                        \
    id          int           NOT NULL   AUTO_INCREMENT,              \
    slug        varchar(256)   UNIQUE     NOT NULL,                    \
    name        varchar(256)   NOT NULL,                               \
    common_name varchar(256)   NOT NULL,                               \
    genus       varchar(256)   NOT NULL,                               \
    family      varchar(256)   NOT NULL,                               \
    img_url     varchar(256) CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL, \
    PRIMARY KEY (id)                                                  \
  );                                                                  \
  CREATE TABLE IF NOT EXISTS plant_items (                            \
    plant_variety_id  int           NOT NULL,                         \
    item_name         varchar(255)  NOT NULL,                         \
    quantity          int,                                            \
    unit              ENUM('gram', 'liter'),                          \
    FOREIGN KEY (plant_variety_id) REFERENCES plant_varieties(id)     \
  );                                                                  \
  CREATE TABLE IF NOT EXISTS plant_instructions (                     \
    plant_variety_id  int           NOT NULL,                         \
    step_number       int           NOT NULL,                         \
    instruction       VARCHAR(1024) NOT NULL,                         \
    FOREIGN KEY (plant_variety_id) REFERENCES plant_varieties(id),    \
    UNIQUE (plant_variety_id, step_number)                            \
  );                                                                  \
  CREATE TABLE IF NOT EXISTS plant_scientific_details (               \
    plant_variety_id  int           NOT NULL,                         \
    ph_low            float,                                          \
    ph_high           float,                                          \
    temperature_low   float,                                          \
    temperature_high  float,                                          \
    FOREIGN KEY (plant_variety_id) REFERENCES plant_varieties(id)     \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Created plant tables');
});
