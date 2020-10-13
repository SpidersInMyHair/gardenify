"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
connection = require('./../../../_repository/_config').connection;
function get(id) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      USE plant;                                                        \
      SELECT id, genus, species, description                            \
      FROM plant_varieties                                              \
      WHERE id=\"${id}\"                                                \
      LIMIT 1;                                                          \
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results[1].length > 0 ? results[1][0] : undefined);
        });
    });
}
function insert(id, genus, species, description) {
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
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results);
        });
    });
}
function getItems(id) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_items                                                  \
      WHERE plant_variety_id=\"${id}\";                                 \
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results[1].length > 0 ? results[1] : []);
        });
    });
}
function getInstructions(id) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_instructions                                           \
      WHERE plant_variety_id=\"${id}\"                                  \
      ORDER BY step_number ASC;                                         \
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results[1].length > 0 ? results[1] : []);
        });
    });
}
function getScientificDetails(id) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      USE plant;                                                        \
      SELECT *                                                          \
      FROM plant_scientific_details                                     \
      WHERE plant_variety_id=\"${id}\"                                  \
      LIMIT 1;                                                          \
    `, (err, results) => {
            if (err)
                reject(err);
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
};
//# sourceMappingURL=_repo.js.map