const sha256 = require('js-sha256').sha256;

express = require('express');
module.exports = express();

connection = require('../../_repository/_config').connection;

connection.query(` \
  LOAD DATA LOCAL INFILE "_backend/plant_service/data/families.csv" \
  INTO TABLE plant_families \
  FIELDS TERMINATED BY ',' \
  OPTIONALLY ENCLOSED BY '"' \
  IGNORE 1 LINES;`
  , (err: any) => {
    if (err) throw err;
    console.log('> MySQL: Initialized plant-family tables');
    connection.query(`
      LOAD DATA LOCAL INFILE "_backend/plant_service/data/plant_varieties.csv" \
      INTO TABLE plant_varieties \
      FIELDS TERMINATED BY ',' \
      OPTIONALLY ENCLOSED BY '"' \
      IGNORE 1 LINES;`
      , (err: any) => {
        if (err) throw err;
        console.log('> MySQL: Initialized plant tables');
        connection.query(`\
        SET @id_1 = UUID_TO_BIN(UUID());                  \
        SET @id_2 = UUID_TO_BIN(UUID());                  \
        SET @id_3 = UUID_TO_BIN(UUID());                  \
        INSERT INTO users (id, email, password)           \
        VALUES (                                          \
          @id_1,                                          \
          "test@gardenify.com",                           \
          ${connection.escape(sha256("pass"))}            \
        ),                                                \
        (                                                 \
          @id_2,                                          \
          "amir@gardenify.com",                           \
          ${connection.escape(sha256("pass"))}            \
        ),                                                \
        (                                                 \
          @id_3,                                          \
          "moey@gardenify.com",                           \
          ${connection.escape(sha256("pass"))}            \
        );                                                \
        INSERT INTO profiles (user_id)                    \
        VALUES (@id_1), (@id_2), (@id_3);                 \
        INSERT INTO sessions (user_id, session_key)       \
        VALUES (@id_1, UUID_TO_BIN(UUID())),              \
        (@id_2, UUID_TO_BIN(UUID())),                     \   
        (@id_3, UUID_TO_BIN(UUID()));                     \
        INSERT INTO favourites (user_id, plant_slug)      \
        VALUES                                            \
          (@id_1, "lilium-canadense" ),                   \
          (@id_1, "papaver-orientale" ),                  \
          (@id_1, "erythroxylum-coca" ),                  \
          (@id_1, "diaperia-prolifera" ),                 \
          (@id_1, "nicotiana-glutinosa" );                \
        INSERT INTO ratings (user_id, slug, rating)       \
        VALUES                                            \
          (@id_1, "lilium-canadense", 3),                 \
          (@id_2, "lilium-canadense", 2),                 \
          (@id_3, "lilium-canadense", 3),                 \
          (@id_2, "papaver-orientale", 1),                \
          (@id_2, "erythroxylum-coca", 4),                \
          (@id_3, "diaperia-prolifera", 1),               \
          (@id_3, "nicotiana-glutinosa", 2);`
        , (err: any) => {
          if (err) throw err;
          console.log('> MySQL: Initialized user tables');
        });
      });
  });
