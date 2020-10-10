import {PlantVariety} from "../../../protos/_backend/plant_service/protos/plant_variety_pb";

connection = require('./../../../_repository/_config').connection;

function get(id: string): Promise<PlantVariety> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      USE plant;
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
    connection.query(` \
      USE plant;
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

module.exports = {
  get,
  insert
}