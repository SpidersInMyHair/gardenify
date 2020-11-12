express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(`                                                                                  \
  DROP TABLE IF EXISTS plant_climates;                                                              \
  DROP TABLE IF EXISTS post_code_climates;                                                          \
  DROP TABLE IF EXISTS favourites;                                                                  \
  DROP TABLE IF EXISTS ratings; \
  DROP TABLE IF EXISTS comments; \
  DROP TABLE IF EXISTS plant_distributions; \
  DROP TABLE IF EXISTS plant_distribution_details; \
  DROP TABLE IF EXISTS plant_items; \
  DROP TABLE IF EXISTS plant_instructions; \
  DROP TABLE IF EXISTS plant_scientific_details; \
  DROP TABLE IF EXISTS plant_comments; \
  DROP TABLE IF EXISTS plant_varieties; \
  DROP TABLE IF EXISTS plant_families; \
  CREATE TABLE IF NOT EXISTS plant_families (                                                       \
    name        varchar(256)   UNIQUE     NOT NULL,                                                 \
    common_name varchar(256)   NOT NULL,                                                            \
    PRIMARY KEY (name)                                                                              \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS plant_varieties (                                                      \
    common_name varchar(256)   NOT NULL,                                                            \
    family      varchar(256)   NOT NULL,                                                            \
    genus       varchar(256)   NOT NULL,                                                            \
    trefle_id   varchar(32)    UNIQUE     NOT NULL,                                                 \
    img_url     varchar(256)   CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL,           \
    name        varchar(256)   NOT NULL,                                                            \
    slug        varchar(256)   UNIQUE     NOT NULL,                                                 \
    id          int            NOT NULL   AUTO_INCREMENT,                                           \
    PRIMARY KEY (id),                                                                               \
    FOREIGN KEY (family) REFERENCES plant_families(name)                                            \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS plant_items (                                                          \
    slug  varchar(256)               NOT NULL,                                                      \
    item_name         varchar(255)   NOT NULL,                                                      \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug),                                            \
    UNIQUE (slug, item_name)                                                                        \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS plant_instructions (                                                   \
    slug              varchar(256)    NOT NULL,                                                     \
    step_number       int             NOT NULL,                                                     \
    instruction       VARCHAR(1024)   NOT NULL,                                                     \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug),                                            \
    UNIQUE (slug, step_number)                                                                      \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS plant_scientific_details (                                             \
    slug                varchar(256)  UNIQUE      NOT NULL,                                         \
    wiki                varchar(256),                                                               \
    description         text,                                                                       \
    ph_low              float,                                                                      \
    ph_high             float,                                                                      \
    temperature_low     float,                                                                      \
    temperature_high    float,                                                                      \
    precipitation_low   float,                                                                      \
    precipitation_high  float,                                                                      \
    light int,                                                                                      \
    soil_salinity int,                                                                              \
    soil_texture int,                                                                               \
    soil_humidity int,                                                                              \
    soil_nutriments int,                                                                            \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug)                                             \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS plant_distribution_details ( \
    distribution_slug   varchar(256)    NOT NULL    UNIQUE, \
    name                varchar(256)    NOT NULL, \
    tdwg_code           varchar(256)    NOT NULL, \
    level               int             NOT NULL, \
    parent_slug         varchar(256), \
    parent_name         varchar(256), \
    species_count       int             NOT NULL, \
    id                      int           NOT NULL AUTO_INCREMENT, \
    PRIMARY KEY (id) \
  ); \
  CREATE TABLE IF NOT EXISTS plant_distributions ( \
    distribution_slug       varchar(256)  NOT NULL, \
    slug              varchar(256)  NOT NULL, \
    id                      int           NOT NULL AUTO_INCREMENT, \
    PRIMARY KEY (id), \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug), \
    FOREIGN KEY (distribution_slug) REFERENCES plant_distribution_details(distribution_slug), \
    UNIQUE (distribution_slug, slug) \
  ); \
  CREATE TABLE IF NOT EXISTS comments (                                                             \
    id         int           NOT NULL AUTO_INCREMENT,                                               \
    slug       varchar(256)  NOT NULL,                                                              \
    user_id    BINARY(16)    NOT NULL,                                                              \
    date       TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,                                    \
    comment_description varchar(1024) NOT NULL,                                                     \
    PRIMARY KEY (id),                                                                               \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug)                                             \
  );                                                                                                \
  CREATE TABLE IF NOT EXISTS ratings (                                                              \
    id         int           NOT NULL AUTO_INCREMENT,                                               \
    slug       varchar(256)  NOT NULL,                                                              \
    user_id    BINARY(16)    NOT NULL,                                                              \
    date       TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,                                    \
    rating     int           NOT NULL,                                                              \
    PRIMARY KEY (id),                                                                               \
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug),                                            \
    UNIQUE (slug, user_id)                                                                          \
  );
  CREATE TABLE IF NOT EXISTS post_code_climates (                                                   \
    pc          varchar(8)  UNIQUE      NOT NULL,                                                   \
    frostann    float       NOT NULL,                                                               \
    maxsum      float       NOT NULL,                   \
    minwin      float       NOT NULL,                   \
    rainan      float       NOT NULL,                   \
    rh9an       float       NOT NULL,                   \
    id          int         NOT NULL AUTO_INCREMENT,                                               \
    PRIMARY KEY (pc)
  );
  CREATE TABLE IF NOT EXISTS plant_climates (                                                       \
    slug        varchar(256)  UNIQUE      NOT NULL,                                                   \
    humidity    float         NOT NULL,                                                               \
    ffdm        float         NOT NULL,                   \
    min_precip  float         NOT NULL,                   \
    max_precip  float         NOT NULL,                   \
    id          int           NOT NULL AUTO_INCREMENT,                                               \
    PRIMARY KEY (slug),
    FOREIGN KEY (slug) REFERENCES plant_varieties(slug)                                             \
  );`
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Created plant tables');
});
