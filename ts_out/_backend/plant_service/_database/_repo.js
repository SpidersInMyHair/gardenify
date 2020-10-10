"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
connection = require('./../../../_repository/_config').connection;
function get(id) {
    return new Promise((resolve, reject) => {
        connection.query(` \
      USE plant;
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
        connection.query(` \
      USE plant;
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
module.exports = {
    get,
    insert
};
//# sourceMappingURL=_repo.js.map