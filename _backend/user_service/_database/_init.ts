express = require('express');
module.exports = express();
const sha256 = require('js-sha256').sha256;

require('../../../_repository/_config').connection;

connection.query(` \
  SET @id = UUID_TO_BIN(UUID());                    \
  INSERT INTO users (id, email, password)           \
  VALUES (                                          \
    @id,                                            \
    "test@gardenify.com",                           \
    ${connection.escape(sha256("pass"))}            \
  );                                                \
  INSERT INTO profiles (user_id)                    \
  VALUES (                                          \
    @id                                             \
  );                                                \
  INSERT INTO sessions (user_id, session_key)       \
  VALUES (                                          \
    @id,                                            \
    UUID_TO_BIN(UUID())                             \
  );                                                \
  INSERT INTO favourites (user_id, plant_slug)      \
  VALUES                                            \
    ( @id, "cannabis-sativa" ),                     \
    ( @id, "papaver-orientale" ),                   \
    ( @id, "erythroxylum-coca" ),                   \
    ( @id, "diaperia-prolifera" ),                  \
    ( @id, "nicotiana-glutinosa" );`
  , (err: any) => {
    if (err) throw err;
    console.log('> MySQL: Initialized users tables');
  });