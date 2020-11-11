let repo = require('./_repo');

express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query(` \
  LOAD DATA LOCAL INFILE "_backend/plant_service/data/families.csv" \
  INTO TABLE plant_families \
  FIELDS TERMINATED BY ',' \
  OPTIONALLY ENCLOSED BY '"' \
  IGNORE 1 LINES;`
  , (err: any) => {
    if (err) throw err;
    console.log('> MySQL: Initialized plant-family tables');
    connection.query(`
      LOAD DATA LOCAL INFILE "_backend/plant_service/data/plant_varieties.csv" \
      INTO TABLE plant_varieties \
      FIELDS TERMINATED BY ',' \
      OPTIONALLY ENCLOSED BY '"' \
      IGNORE 1 LINES;`
      , (err: any) => {
        if (err) throw err;
        console.log('> MySQL: Initialized plant tables');
        connection.query(`
          LOAD DATA LOCAL INFILE "_backend/plant_service/data/distribution_details.csv" \
          INTO TABLE plant_distribution_details \
          FIELDS TERMINATED BY ',' \
          OPTIONALLY ENCLOSED BY '"' \
          IGNORE 1 LINES;`
          , (err: any) => {
            if (err) throw err;
            console.log('> MySQL: Initialized distribution details table');
            connection.query(`
              LOAD DATA LOCAL INFILE "_backend/plant_service/data/distribution_details.csv" \
              INTO TABLE plant_distribution_details \
              FIELDS TERMINATED BY ',' \
              OPTIONALLY ENCLOSED BY '"' \
              IGNORE 1 LINES;`
              , (err: any) => {
                if (err) throw err;
                console.log('> MySQL: Initialized plant distribution table');
              });
          });
      });
  });
