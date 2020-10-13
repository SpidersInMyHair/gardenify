import {User} from "../../../protos/_backend/user_service/protos/user_pb";

function get(id: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      USE gardenify_user;                                               \
      SELECT id, email                                                  \
        FROM users                                                      \
      WHERE id=\"${id}\"                                                \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<User[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function create(id: string, email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(`
      USE gardenify_user;
      INSERT INTO users (id, email, password) 
      VALUES (
        \"${id}\",
        \"${email}\",
        \"${password}\",
      ); 
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  get,
  create
}