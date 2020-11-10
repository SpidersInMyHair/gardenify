import {
  Profile,
  User
} from "../../../protos/_backend/user_service/protos/user_pb";

function getUserById(id: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      SELECT BIN_TO_UUID(id) id, email        \
      FROM users                              \
      WHERE id=UUID_TO_BIN(\"${id}\")         \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function getUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      SELECT BIN_TO_UUID(id) id, email, name, description, image_url        \
      FROM users JOIN profiles ON id=user_id  \
      WHERE email=\"${email}\"                \
      AND password=\"${password}\"            \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function createUser(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      SET @id = UUID_TO_BIN(UUID());          \
      SET @session_key = UUID_TO_BIN(UUID()); \
      INSERT INTO users (id, email, password) \
      VALUES (                                \
        @id,                                  \
        \"${email}\",                         \
        \"${password}\"                       \
      );                                      \
      INSERT INTO sessions (user_id, session_key) \
      VALUES (                                \
        @id,                                  \
        @session_key                          \
      );                                      \
      INSERT INTO profiles (user_id)          \
      VALUES (                                \
        @id                                   \
      );
      SELECT BIN_TO_UUID(@id) id, BIN_TO_UUID(@session_key) session_key;`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results && results.length > 5 && results[5] && results[5].length ? results[5][0] : undefined);
    });
  });
}

function getSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                      \
      SELECT session_key                    \
      FROM sessions                         \
      WHERE user_id=UUID_TO_BIN(\"${id}\")  \
      AND session_key=UUID_TO_BIN(\"${session_key}\") \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function setSession(id: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      UPDATE sessions                         \
      SET session_key = @session_key := UUID_TO_BIN(UUID())     \
      WHERE user_id=UUID_TO_BIN(\"${id}\");
      SELECT BIN_TO_UUID(@session_key) session_key;`
    , (err: any, results: Array<Array<any>>) => {
      if (err) reject(err);
      resolve(results && results.length > 1 && results[1] && results[1].length ? results[1][0].session_key : undefined);
    });
  });
}

function clearSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                        \
      UPDATE sessions                         \
      SET session_key=NULL                    \
      WHERE user_id=UUID_TO_BIN(\"${id}\")    \
      AND session_key=UUID_TO_BIN(\"${session_key}\")`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getProfile(id: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    connection.query(`                      \
      SELECT name, email, description, image_url   \
      FROM profiles JOIN users ON id=user_id       \
      WHERE user_id=UUID_TO_BIN(\"${id}\")  \
      LIMIT 1;`
    , (err: any, results: Array<Profile>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
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
      WHERE user_id=UUID_TO_BIN(\"${id}\")`
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