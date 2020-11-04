import { User } from "../../../protos/_backend/user_service/protos/user_pb";
import { Profile } from "../../../protos/_backend/user_service/protos/profile_pb";

function get(id: string): Promise<User> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT id, email \
        FROM users \
      WHERE id=\"${id}\" \
      LIMIT 1;`
      , (err: any, results: Array<User[]>) => {
        if (err) reject(err);
        resolve(results[1].length > 0 ? results[1][0] : undefined);
      });
  })
}

function create(id: string, email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO users (id, email, password) \
      VALUES ( \
        \"${id}\", \
        \"${email}\", \
        \"${password}\", \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  });
}

function get_profile(id: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT name, about_me, brief_desc \
        FROM profiles \
      WHERE id=\"${id}\" \
      LIMIT 1;`
      , (err: any, results: Array<Profile[]>) => {
        if (err) reject(err);
        resolve(typeof results !== 'undefined' ? results[1][0] : undefined);
      });
  })
}

function create_profile(user_id: string, name: string, about_me: string, brief_desc: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO profiles (user_id, name, about_me, brief_desc) \
      VALUES ( \
        \"${user_id}\", \
        \"${name}\", \
        \"${about_me}\", \
        \"${brief_desc}\", \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  });
}

function update_profile(user_id: string, name: string, about_me: string, brief_desc: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      UPDATE profiles \
      SET name=\"${name}\", \
          about_me=\"${about_me}\", \
          brief_desc=\"${brief_desc}\", \
      WHERE user_id=\"${user_id}\";`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  });
}

function get_session(id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT session_key \
        FROM sessions \
      WHERE user_id=\"${id}\" \
      LIMIT 1;`
      , (err: any, results: Array<string[]>) => {
        if (err) reject(err);
        resolve(typeof results !== 'undefined' ? results[1][0] : undefined);
      });
  })
}



module.exports = {
  get,
  create,
  get_profile,
  create_profile,
  update_profile,
  get_session
}
