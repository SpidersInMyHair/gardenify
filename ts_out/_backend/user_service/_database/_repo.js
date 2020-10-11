"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(id) {
    return new Promise((resolve, reject) => {
        connection.query(`                                                  \
      USE gardenify_user;                                               \
      SELECT id, email                                                  \
        FROM users                                                      \
      WHERE id=\"${id}\"                                                \
      LIMIT 1;                                                          \
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results[1].length > 0 ? results[1][0] : undefined);
        });
    });
}
function create(id, email, password) {
    return new Promise((resolve, reject) => {
        connection.query(`
      USE gardenify_user;
      INSERT INTO users (id, email, password) 
      VALUES (
        \"${id}\",
        \"${email}\",
        \"${password}\",
      ); 
    `, (err, results) => {
            if (err)
                reject(err);
            resolve(results);
        });
    });
}
module.exports = {
    get,
    create
};
//# sourceMappingURL=_repo.js.map