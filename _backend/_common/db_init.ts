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
      IGNORE 1 LINES; \
      LOAD DATA LOCAL INFILE "_backend/plant_service/data/distribution_details.csv" \
      INTO TABLE plant_distribution_details \
      FIELDS TERMINATED BY ',' \
      OPTIONALLY ENCLOSED BY '"' \
      IGNORE 1 LINES; \
      LOAD DATA LOCAL INFILE "_backend/plant_service/data/distributions.csv" \
      INTO TABLE plant_distributions \
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
          "wayne@gardenify.com",                          \
          ${connection.escape(sha256("pass"))}            \
        ),                                                \
        (                                                 \
          @id_3,                                          \
          "amir@gardenify.com",                           \
          ${connection.escape(sha256("pass"))}            \
        );                                                \
        INSERT INTO profiles (user_id, name, image_url)   \
        VALUES                                            \
          (@id_1, "Philly Boi", "https://img.buzzfeed.com/buzzfeed-static/static/2019-11/26/21/asset/8f5cc2662863/sub-buzz-187-1574803579-6.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"),                          \
          (@id_2, "Wayne Wobcke", "https://www.engineering.unsw.edu.au/computer-science-engineering/sites/cse/files/profile_picture/AProf_Wayne_Wobcke.jpg"),                        \
          (@id_3, "Amir Harambasic", NULL);                     \
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
          (@id_3, "nicotiana-glutinosa", 2);              \
        INSERT INTO comments (user_id, slug, comment_description)                     \
        VALUES                                                                        \
          (@id_1, "lilium-canadense", "I absolutely love mine"),                      \
          (@id_2, "lilium-canadense", "Nice flowers"),                                \
          (@id_3, "lilium-canadense", "Not bhed good soize"),                         \
          (@id_2, "papaver-orientale", "A real beauty"),                              \
          (@id_2, "erythroxylum-coca", "Would love to get my hands on one"),          \
          (@id_3, "diaperia-prolifera", "Not bhed good soize"),                       \
          (@id_3, "nicotiana-glutinosa", "Not bhed good soize");`
        , (err: any) => {
          if (err) throw err;
          console.log('> MySQL: Initialized user tables');
        });
      });
  });
