import {
  Profile,
  User
} from "../../../protos/_backend/user_service/protos/user_pb";

function getUserById(id: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      SELECT id, email                        \
      FROM users                              \
      WHERE id=\"${id}\"                      \
      LIMIT 1;`
    , (err: any, results: Array<User[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function getUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      SELECT id, email                        \
      FROM users                              \
      WHERE email=\"${email}\"                \
      AND password=\"${password}\"            \
      LIMIT 1;`
    , (err: any, results: Array<User[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function createUser(id: string, email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      INSERT INTO users (id, email, password) \
      VALUES (                                \
        \"${id}\",                            \
        \"${email}\",                         \
        \"${password}\"                       \
      );                                      \
      INSERT INTO sessions (user_id)          \
      VALUES (                                \
        \"${id}\"                             \
      );                                      \
      INSERT INTO profiles (user_id, name)    \
      VALUES (                                \
        \"${id}\",                            \
        \"JOHN DOE\"                          \
      );`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                      \
      SELECT user_id, session_key           \
      FROM sessions                         \
      WHERE user_id=\"${id}\"               \
      AND session_key=\"${session_key}\"    \
      LIMIT 1;`
    , (err: any, results: Array<User[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function setSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      UPDATE sessions                         \
      SET session_key=\"${session_key}\"      \
      WHERE user_id=\"${id}\"`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function clearSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      UPDATE sessions                         \
      SET session_key=NULL                    \
      WHERE user_id=\"${id}\"                 \
      AND session_key=\"${session_key}\"`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getProfile(id: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    connection.query(`                      \
      SELECT *                              \
      FROM profiles                         \
      WHERE user_id=\"${id}\"               \
      LIMIT 1;`
    , (err: any, results: Array<Profile[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  })
}

function editProfile(id: string, name: string, description: string, image_url: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      UPDATE profiles                         \
      SET name=\"${name}\",                   \
      description=\"${description}\",         \
      image_url=\"${image_url}\"              \
      WHERE user_id=\"${id}\"`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  getUserById,
  getUser,
  createUser,
  getSession,
  setSession,
  clearSession,
  getProfile,
  editProfile
}