import {
  PlantInstruction,
  PlantItem, 
  PlantScientificDetails,
  PlantVariety,
  Comments,
  Ratings
} from "../../../protos/_backend/plant_service/protos/plant_pb";

let { PythonShell } = require('python-shell');

connection = require('./../../../_repository/_config').connection;

function getPlant(slug: string): Promise<PlantVariety> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT slug, name, common_name, genus, family, img_url \
      FROM plant_varieties \
      WHERE slug=${connection.escape(slug)} \
      LIMIT 1;`
      , (err: any, results: Array<PlantVariety>) => {
        if (err) reject(err);
        resolve(results.length > 0 ? results[0] : undefined);
      });
  })
}

function getPlants(offset: number = 0, limit: number = 20, query: any): Promise<PlantVariety[]> {
  if (query && query.search) {
    const sanitizedKeyword = connection.escape('%' + query.search + '%');
    delete query.search;
    return new Promise((resolve, reject) => {
      connection.query(` \
        SELECT slug, name, common_name, genus, family, img_url \
        FROM plant_varieties \
        WHERE (slug       LIKE ${sanitizedKeyword} \
        OR    name        LIKE ${sanitizedKeyword} \
        OR    common_name LIKE ${sanitizedKeyword} \
        OR    genus       LIKE ${sanitizedKeyword} \
        OR    family      LIKE ${sanitizedKeyword}) \
        ${Object.keys(query).map((param) => (
          query[param] ? `AND  ${connection.escapeId(param)} LIKE ${connection.escape('%' + query[param] + '%')}` : ''
        )).join(" ")}
        ORDER BY img_url \
        LIMIT ${offset},${limit}; \
        `, (err: any, results: Array<PlantVariety>) => {
          if (err) reject(err);
          resolve(results.length > 0 ? results : undefined);
      });
    })  
  }

  let first = true;
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT slug, name, common_name, genus, family, img_url \
      FROM plant_varieties \
      ${Object.keys(query).map((param) => {
        if (!query[param]) return
        if (first) {
          first = false;
          return `WHERE ${connection.escapeId(param)} LIKE ${connection.escape('%' + query[param] + '%')}`
        }
        return `AND  ${connection.escapeId(param)} LIKE ${connection.escape('%' + query[param] + '%')}`
      }).join(" ")}
      ORDER BY img_url \
      LIMIT ${offset},${limit}; \
      `, (err: any, results: Array<PlantVariety>) => {
        if (err) reject(err);
        resolve(results.length > 0 ? results : undefined);
    });
  })
}

function insert(trefle_id: string, slug: string, name: string, common_name: string, genus: string, family: string, img_url: string) {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO plant_varieties (trefle_id, slug, name, common_name, genus, family, img_url) \
      VALUES ( \
        ${connection.escape(trefle_id)}, \
        ${connection.escape(slug)}, \
        ${connection.escape(name)}, \
        ${connection.escape(common_name)}, \
        ${connection.escape(genus)}, \
        ${connection.escape(family)}, \
        ${connection.escape(img_url)} \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  })
}

function insert_scientific(data): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO plant_scientific_details (slug, wiki, description, ph_low, ph_high, temperature_low, temperature_high, precipitation_low, precipitation_high, light, soil_salinity, soil_texture, soil_humidity, soil_nutriments) \
      VALUES ( \
        ${connection.escape(data.slug)}, \
        ${connection.escape(data.wiki)}, \
        ${connection.escape(data.description)}, \
        ${data.ph_minimum}, \
        ${data.ph_maximum}, \
        ${data.minimum_temperature.deg_c}, \
        ${data.maximum_temperature.deg_c}, \
        ${data.minimum_precipitation.mm}, \
        ${data.maximum_precipitation.mm}, \
        ${data.light}, \
        ${data.soil_salinity}, \
        ${data.soil_texture}, \
        ${data.soil_humidity}, \
        ${data.soil_nutriments} \
      ); \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(typeof results === 'undefined' ? 0 : 1);
    });
  })
}

function insert_item(data):Promise<number>{ 
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO plant_items (slug, item_name) \
      VALUES ( \
        ${connection.escape(data.slug)}, \
        ${connection.escape(data.item_name)} \
      ); \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(typeof results === 'undefined' ? 0 : 1);
    });
  })
}

function getItems(slug: string): Promise<Array<Array<PlantItem>>> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM plant_items \
      WHERE slug=${connection.escape(slug)}; \
    `, (err: any, results: Array<Array<PlantItem>>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results.map((a: any) => a.item_name) : []);
    });
  });
}

function getInstructions(slug: string): Promise<Array<PlantInstruction>> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM plant_instructions \
      WHERE slug=${connection.escape(slug)} \
      ORDER BY step_number ASC;`
      , (err: any, results: Array<Array<PlantInstruction>>) => {
        if (err) reject(err);
        resolve(typeof results !== 'undefined' ? results[1] : []);
      });
  });
}

function getScientificDetails(slug: string): Promise<PlantScientificDetails> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM plant_scientific_details \
      WHERE slug=${connection.escape(slug)} \
      LIMIT 1;`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(typeof results !== 'undefined' ? results[0] : undefined);
      });
  });
}

function addItems(slug: string): Promise<number> {
  
  return new Promise((resolve) => {
    getScientificDetails(slug)
      .then((plantScientificDetails: any) => {
        if(typeof plantScientificDetails !== 'undefined'){
          let items = [];
          // Item for watering
          let temp = 'Water hose';
          if(plantScientificDetails.precipitation_low != undefined && plantScientificDetails.precipitation_low < 5) {
            temp = 'Watering can or natural rain';
          } else if(plantScientificDetails.precipitation_low != undefined && plantScientificDetails.precipitation_low > 10) {
            temp = 'Sprinkler';
          }
          items.push(temp);
          // Item for soil type
          temp = 'Loam soil';
          if(plantScientificDetails.soil_texture != undefined && plantScientificDetails.soil_texture < 5) {
            temp = 'Clay based soil';
          } else if (plantScientificDetails.soil_texture != undefined && plantScientificDetails.soil_texture > 5){
            temp = 'Rock based soil';
          }
          items.push(temp);
          // Item for fertilizer
          temp = 'No fertilizers required';
          if(plantScientificDetails.ph_high != undefined && plantScientificDetails.ph_high < 7) {
            temp = 'Nitrogenous fertilizers (eg Ammonium Nitrate, elemental sulphur, sphagum peat moss)';
          } else if (plantScientificDetails.ph_high != undefined && plantScientificDetails.ph_high > 7){
            temp = 'Basic fertilizers (eg Calcium carbonate, Dolomite Lime, Oyster shell Flower)';
          }
          items.push(temp);
          if(plantScientificDetails.soil_texture != undefined && plantScientificDetails.soil_humidity != undefined){ 
            if( plantScientificDetails.soil_texture < 4 && plantScientificDetails.soil_texture > 1 &&
                plantScientificDetails.soil_humidity > 5) {
              temp = 'Peat Moss';
              items.push(temp);
            } else if (plantScientificDetails.soil_texture < 7 && plantScientificDetails.soil_texture > 3 &&
                       plantScientificDetails.soil_humidity < 6){
              temp = 'Sand';
              items.push(temp);
            }
          }
          if(slug.includes('orchid')) {
            temp = 'Orchid potting mix';
            items.push(temp);
          } else if(slug.includes('azalea') || slug.includes('bluberry') || slug.includes('hododendrons')){
            temp = 'Azalea potting mix';
            items.push(temp);
          } else if(slug.includes('citrus') || slug.includes('succulent') || slug.includes('cactus') || slug.includes('palm')){
            temp = 'Potting mix';
            items.push(temp);
          }
          for (let i = 0; i < items.length; i++) {
            insert_item({'slug' : slug, 'item_name':items[i]});
          }
          resolve(1);
      }});
    }) 
}

function addScientificDetails(slug: string): Promise<PlantScientificDetails> {
  const pyshell = new PythonShell('source_garden_detail.py', {
    mode: 'json',
    //pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '_backend/plant_service/py_scripts/',
    args: slug
  });

  return new Promise((resolve, reject) => {
    pyshell.on('message', function (response: any) {
      typeof response.slug !== 'undefined' ? insert_scientific(response).then(() => {
        resolve(getScientificDetails(slug))
      }) : resolve(undefined);
    })
  })
}

function getPlantsByKeyword(keyword: string): Promise<PlantVariety[]> {
  const sanitizedKeyword = connection.escape('%' + keyword + '%');
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT slug, name, common_name, genus, family, img_url \
      FROM plant_varieties \
      WHERE slug        LIKE ${sanitizedKeyword} \
      OR    name        LIKE ${sanitizedKeyword} \
      OR    common_name LIKE ${sanitizedKeyword} \
      OR    genus       LIKE ${sanitizedKeyword} \
      OR    family      LIKE ${sanitizedKeyword} \
      LIMIT 100;`
      , (err: any, results: Array<PlantVariety>) => {
        if (err) reject(err);
        resolve(results.length > 0 ? results : undefined);
      });
  })
}

function getComments(slug: string): Promise<Array<Array<Comments>>> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM comments \
      WHERE slug=${connection.escape(slug)}; \
    `, (err: any, results: Array<Array<Comments>>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : []);
    });
  });
}

function insertComment(slug: string, user_id: number, comment_description: string) {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO comments (slug, user_id, comment_description) \
      VALUES ( \
        ${connection.escape(slug)}, \
        ${connection.escape(user_id)}, \
        ${connection.escape(comment_description)} \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  })
}

function getRatings(slug: string): Promise<Array<Array<Ratings>>> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM ratings \
      WHERE slug=${connection.escape(slug)}; \
    `, (err: any, results: Array<Array<Ratings>>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : []);
    });
  });
}

function getRatingByUser(slug: string, user_id: number): Promise<Ratings> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM ratings \
      WHERE slug=${connection.escape(slug)} \
      AND user_id=${connection.escape(user_id)}
      LIMIT 1; \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(typeof results !== 'undefined' ? results[0] : undefined);
    });
  });
}

function insertRating(slug: string, user_id: number, rating: Number) {
  return new Promise((resolve, reject) => {
    connection.query(` \
      INSERT INTO ratings (slug, user_id, rating) \
      VALUES ( \
        ${connection.escape(slug)}, \
        ${connection.escape(user_id)}, \
        ${connection.escape(rating)} \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(results);
      });
  })
}

module.exports = {
  getPlant,
  getPlants,
  insert,
  insert_scientific,
  getItems,
  addItems,
  getInstructions,
  getScientificDetails,
  addScientificDetails,
  getPlantsByKeyword,
  insertComment,
  getComments,
  insertRating,
  getRatings,
  getRatingByUser
}
