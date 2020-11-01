express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(` \
  DROP TABLE IF EXISTS plant_items; \
  DROP TABLE IF EXISTS plant_instructions; \
  DROP TABLE IF EXISTS plant_scientific_details; \
  DROP TABLE IF EXISTS plant_varieties; \
  DROP TABLE IF EXISTS plant_families; \
  CREATE TABLE IF NOT EXISTS plant_families ( \
    name        varchar(256)   UNIQUE     NOT NULL, \
    common_name varchar(256)   NOT NULL, \
    PRIMARY KEY (name) \
  ); \
  CREATE TABLE IF NOT EXISTS plant_varieties ( \
    common_name varchar(256)   NOT NULL, \
    family      varchar(256)   NOT NULL, \
    genus       varchar(256)   NOT NULL, \
    trefle_id   varchar(32)    UNIQUE     NOT NULL, \
    img_url     varchar(256)   CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL, \
    name        varchar(256)   NOT NULL, \
    slug        varchar(256)   UNIQUE     NOT NULL, \
    id          int            NOT NULL   AUTO_INCREMENT, \
    PRIMARY KEY (id), \
    FOREIGN KEY (family) REFERENCES plant_families(name) \
  ); \
  CREATE TABLE IF NOT EXISTS plant_items ( \
    slug  varchar(256)               NOT NULL, \
    item_name         varchar(255)   NOT NULL, \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug), \
    UNIQUE (slug, item_name) \
  ); \
  CREATE TABLE IF NOT EXISTS plant_instructions ( \
    slug              varchar(256)    NOT NULL, \
    step_number       int             NOT NULL, \
    instruction       VARCHAR(1024)   NOT NULL, \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug), \
    UNIQUE (slug, step_number) \
  ); \
  CREATE TABLE IF NOT EXISTS plant_scientific_details ( \
    slug                varchar(256)  UNIQUE      NOT NULL, \
    wiki                varchar(256), \
    description         text, \
    ph_low              float, \
    ph_high             float, \
    temperature_low     float, \
    temperature_high    float, \
    precipitation_low   float, \
    precipitation_high  float, \
    light int, \
    soil_salinity int, \
    soil_texture int, \
    soil_humidity int, \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug) \
  );`
  , (err: any) => {
    if (err) throw err;
    console.log('> MySQL: Created plant tables');
  });
