import {
  Profile,
  User
} from "../../../protos/_backend/user_service/protos/user_pb";

function getUserById(id: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      SELECT BIN_TO_UUID(id) id, email                                      \
      FROM users                                                            \
      WHERE id=UUID_TO_BIN(${connection.escape(id)})                        \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function getUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      SELECT BIN_TO_UUID(id) id, email, name, description, image_url        \
      FROM users JOIN profiles ON id=user_id                                \
      WHERE email=${connection.escape(email)}                               \
      AND password=${connection.escape(password)}                           \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function createUser(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      SET @id = UUID_TO_BIN(UUID());                                        \
      SET @session_key = UUID_TO_BIN(UUID());                               \
      INSERT INTO users (id, email, password)                               \
      VALUES (                                                              \
        @id,                                                                \
        ${connection.escape(email)},                                        \
        ${connection.escape(password)}                                      \
      );                                                                    \
      INSERT INTO sessions (user_id, session_key)                           \
      VALUES (                                                              \
        @id,                                                                \
        @session_key                                                        \
      );                                                                    \
      INSERT INTO profiles (user_id)                                        \
      VALUES (                                                              \
        @id                                                                 \
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
    connection.query(`                                                      \
      SELECT session_key                                                    \
      FROM sessions                                                         \
      WHERE user_id=UUID_TO_BIN(${connection.escape(id)})                   \
      AND session_key=UUID_TO_BIN(${connection.escape(session_key)})        \
      LIMIT 1;`
    , (err: any, results: Array<User>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function setSession(id: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      UPDATE sessions                                                       \
      SET session_key = @session_key := UUID_TO_BIN(UUID())                 \
      WHERE user_id=UUID_TO_BIN(${connection.escape(id)});
      SELECT BIN_TO_UUID(@session_key) session_key;`
    , (err: any, results: Array<Array<any>>) => {
      if (err) reject(err);
      resolve(results && results.length > 1 && results[1] && results[1].length ? results[1][0].session_key : undefined);
    });
  });
}

function clearSession(id: string, session_key: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      UPDATE sessions                                                       \
      SET session_key=NULL                                                  \
      WHERE user_id=UUID_TO_BIN(${connection.escape(id)})                   \
      AND session_key=UUID_TO_BIN(${connection.escape(session_key)})`
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getProfile(id: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      SELECT name, email, description, image_url                            \
      FROM profiles JOIN users ON id=user_id                                \
      WHERE user_id=UUID_TO_BIN(${connection.escape(id)})                   \
      LIMIT 1;`
    , (err: any, results: Array<Profile>) => {
      if (err) reject(err);
      resolve(results && results.length ? results[0] : undefined);
    });
  })
}

function editProfile(id: string , user: any, profile: any) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
      UPDATE profiles                                                       \
      SET                                                                   \
      ${Object.keys(profile).map((param) => `${connection.escapeId(param)}=${connection.escape(profile[param])}`).join("\n")}
      WHERE user_id=UUID_TO_BIN(${connection.escape(id)});                  \
      UPDATE users                                                          \
      SET                                                                   \
      ${Object.keys(user).map((param) => user[param] ? `${connection.escapeId(param)}=${connection.escape(user[param])}` : '').join("\n")}
      WHERE id=UUID_TO_BIN(${connection.escape(id)});                       \
      `
    , (err: any, results: any) => {
      if (err) reject(err);
      resolve(results && results.length ? true : false);
    });
  });
}

function getFavourites(id: string, offset: number = 0, limit: number = 20) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
    SELECT slug, name, common_name, genus, family, img_url                  \
    FROM favourites JOIN plant_varieties ON plant_slug=slug                 \
    LIMIT ${offset},${limit};`
    , (err: any, results: Array<any>) => {
      if (err) reject(err);
      resolve(results && results.length ? results : undefined);
    });
  })
}


function checkFavourite(id: string, slug: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
    SELECT *                                                                \
    FROM favourites                                                         \
    WHERE user_id=UUID_TO_BIN(${connection.escape(id)}) AND plant_slug=${connection.escape(slug)} \
    LIMIT 1;`
    , (err: any, results: Array<any>) => {
      if (err) reject(err);
      resolve(results && results.length ? true : false);
    });
  })
}

function addFavourite(id: string, slug: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                      \
    INSERT INTO favourites (user_id, plant_slug)                            \
    VALUES (UUID_TO_BIN(${connection.escape(id)}), ${connection.escape(slug)});`
    , (err: any, results: Array<any>) => {
      if (err) reject(err);
      resolve(results ? true : false);
    });
  })
}

function removeFavourite(id: string, slug: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                          \
    DELETE FROM favourites                                                      \
    WHERE user_id=UUID_TO_BIN(${connection.escape(id)}) AND plant_slug=${connection.escape(slug)};`
    , (err: any, results: Array<any>) => {
      if (err) reject(err);
      resolve(results ? true : false);
    });
  })
}

module.exports = {
  getUserById,
  getUser,
  createUser,
  getSession,
  setSession,
  clearSession,
  getProfile,
  editProfile,
  getFavourites,
  checkFavourite,
  addFavourite,
  removeFavourite
}