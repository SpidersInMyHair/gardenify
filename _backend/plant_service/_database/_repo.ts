import {
  PlantInstruction,
  PlantItem, PlantScientificDetails,
  PlantVariety
} from "../../../protos/_backend/plant_service/protos/plant_pb";

connection = require('./../../../_repository/_config').connection;

function get(id: string): Promise<PlantVariety> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE plant;                                                        \
      SELECT id, genus, species, description                            \
      FROM plant_varieties                                              \
      WHERE id=\"${id}\"                                                \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<PlantVariety[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function insert(id: string, genus: string, species: string, description: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE plant;                                                        \
      INSERT INTO plant_varieties (id, genus, species, description)     \
      VALUES (                                                          \
        \"${id}\",                                                      \
        \"${genus}\",                                                   \
        \"${species}\",                                                 \
        \"${description}\",                                             \
      );                                                                \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  })
}

function getItems(id: string): Promise<Array<PlantItem>> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_items                                                  \
      WHERE plant_variety_id=\"${id}\";                                 \
    `, (err: any, results: Array<Array<PlantItem>>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1] : []);
    });
  });
}

function getInstructions(id: string): Promise<Array<PlantInstruction>> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_instructions                                           \
      WHERE plant_variety_id=\"${id}\"                                  \
      ORDER BY step_number ASC;                                         \
    `, (err: any, results: Array<Array<PlantInstruction>>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1] : []);
    });
  });
}

function getScientificDetails(id: string): Promise<PlantScientificDetails> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_scientific_details                                     \
      WHERE plant_variety_id=\"${id}\"                                  \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<PlantScientificDetails[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  });
}

module.exports = {
  get,
  insert,
  getItems,
  getInstructions,
  getScientificDetails,
}