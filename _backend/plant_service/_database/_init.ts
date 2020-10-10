express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query('                                                    \
  USE plant;                                                          \
  INSERT INTO plant_varieties (id, genus, species, description)       \
  VALUES (                                                            \
    "test-plant1",                                                    \
    "Tagetes",                                                        \
    "Erecta",                                                         \
    "Tagetes erecta, the Mexican marigold or Aztec marigold, is a species of the genus Tagetes native to Mexico. Despite its being native to the Americas, it is often called African marigold. In Mexico, this plant is found in the wild in the states of México, Puebla, and Veracruz."\
  );'
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Initialized TABLE plant_varieties');
});