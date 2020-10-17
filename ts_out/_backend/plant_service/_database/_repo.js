"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
connection = require('./../../../_repository/_config').connection;
function get(slug) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      SELECT slug, name, common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      WHERE slug=\"${slug}\"                                                \
      LIMIT 1;                                                          \
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results.length > 0 ? results[0] : undefined);
        });
    });
}
function insert(slug, name, common_name, genus, family, img_url) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      INSERT INTO plant_varieties (slug, name, common_name, genus, family, img_url)     \
      VALUES (                                                          \
        \"${slug}\",                                                    \
        \"${name}\",                                                    \
        \"${common_name}\",                                             \
        \"${genus}\",                                                   \
        \"${family}\",                                                  \
        \"${img_url}\",                                                 \
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