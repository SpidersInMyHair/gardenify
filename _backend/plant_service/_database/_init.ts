express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query('                                                            \
  USE plant;                                                                  \
  INSERT INTO plant_varieties (id, genus, species, description)               \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    "Tagetes",                                                                \
    "Erecta",                                                                 \
    "Tagetes erecta, the Mexican marigold or Aztec marigold, is a species of the genus Tagetes native to Mexico. Despite its being native to the Americas, it is often called African marigold. In Mexico, this plant is found in the wild in the states of México, Puebla, and Veracruz."\
  );                                                                          \
  INSERT INTO plant_items (plant_variety_id, item_name)                       \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    "Mexican Marigold Packet Seeds"                                           \
  );                                                                          \
  INSERT INTO plant_items (plant_variety_id, item_name, quantity, unit)       \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    "Premium Potting Mix",                                                    \
    250,                                                                      \
    "gram"                                                                    \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    1,                                                                        \
    "Put seeds into the ground. Bury 20 cm deep."                             \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    2,                                                                        \
    "Cover with premium potting mix."                                         \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    3,                                                                        \
    "Success!"                                                                \
  );                                                                          \
  INSERT INTO plant_scientific_details (plant_variety_id, ph_low, ph_high)    \
  VALUES (                                                                    \
    "test-plant1",                                                            \
    7.5,                                                                      \
    8.5                                                                       \
  );'
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Initialized DATABASE plant');
});