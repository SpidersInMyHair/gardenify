import {
  PlantInstruction,
  PlantItem, PlantScientificDetails,
  PlantVariety
} from "../../../protos/_backend/plant_service/protos/plant_pb";

let {PythonShell} = require('python-shell');

connection = require('./../../../_repository/_config').connection;

function getPlant(slug: string): Promise<PlantVariety> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, family_common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      WHERE slug=\"${slug}\"                                                \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results[0] : undefined);
    });
  })
}

function getPlants(offset:number=0, limit:number=20): Promise<PlantVariety[]> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, family_common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      LIMIT ${offset},${limit};                                                          \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : undefined);
    });
  })
}


function insert(trefle_id:string, slug: string, name: string, common_name: string, family_common_name: string, genus: string, family: string, img_url: string) {
  return new Promise((resolve, reject) => {
    
    /*
    console.log(`
      INSERT INTO plant_varieties (slug, name, common_name, genus, family, img_url)\n
      VALUES (\n
        \"${slug}\",\n
        \"${name}\",\n
        \"${common_name}\",\n
        \"${genus}\",\n
        \"${family}\",\n
        \"${img_url}\",\n
      );\n
    `);
    */
    connection.query(`                                                  \
      INSERT INTO plant_varieties (trefle_id, slug, name, common_name, family_common_name, genus, family, img_url)     \
      VALUES (                                                          \
        \"${trefle_id}\",                                                   \
        \"${slug}\",                                                    \
        \"${name}\",                                                    \
        \"${common_name}\",                                             \
        \"${family_common_name}\",                                      \
        \"${genus}\",                                                   \
        \"${family}\",                                                  \
        \"${img_url}\"                                                  \
      );                                                                \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  })
}

function insert_scientific(slug: string, ph_low: number, ph_high: number, temperature_low: number, temperature_high: number){ 
  return new Promise((resolve, reject) => {
    
    connection.query(`                                                  \
      INSERT INTO plant_scientific_details (slug, ph_low, ph_high, temperature_low, temperature_high) \
      VALUES (                                                          \
        \"${slug}\",                                                    \
        ${ph_low}, \
        ${ph_high}, \
        ${temperature_low}, \
        ${temperature_high} \
      );                                                                \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  })
}

function getItems(id: string): Promise<Array<PlantItem>> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT *                                                          \
      FROM plant_items                                                  \
      WHERE plant_variety_id=\"${id}\";                                 \
    `, (err: any, results: Array<Array<PlantItem>>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1] : []);
    });
  });
}

function getInstructions(id: string): Promise<Array<PlantInstruction>> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT *                                                          \
      FROM plant_instructions                                           \
      WHERE plant_variety_id=\"${id}\"                                  \
      ORDER BY step_number ASC;                                         \
    `, (err: any, results: Array<Array<PlantInstruction>>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1] : []);
    });
  });
}

function getScientificDetails(id: string): Promise<PlantScientificDetails> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT *                                                          \
      FROM plant_scientific_details                                     \
      WHERE slug=\"${id}\"                                  \
      LIMIT 1;                                                          \
    `, (err: any, results) => {
      if (err) reject(err);
      //resolve(results[1].length > 0 ? results[1][0] : undefined);
      resolve(typeof results !== 'undefined' ? results[0] : undefined);
    });
  });
}

function addScientificDetails(id: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT trefle_id                                                          \
      FROM plant_varieties                                     \
      WHERE slug=\"${id}\"                                  \
      LIMIT 1;                                                          \
    `, (err: any, results) => {
      if (err) reject(err);
      if(typeof results[0] !== 'undefined'){
         // insert into the database if there's a match ...
         //console.log(results[0].trefle_id);
         let options = {
           mode: 'json',
           //pythonOptions: ['-u'], // get print results in real-time
           scriptPath: '_backend/plant_service/py_scripts/',
           args: [results[0].trefle_id]
         };

         //let pyshell = new PythonShell('get_scientific_details.py',options);
         let pyshell = new PythonShell('source_garden_detail.py',options);

         pyshell.on('message', function (response) {
           let x = insert_scientific(response.slug, response.ph_minimum, 
                    response.ph_maximum, response.minimum_temperature.deg_c,
                    response.maximum_temperature.deg_c);
           //await x;
           //console.log(response);
        });
      }
    });
  });
}

function getPlantsByKeyword(keyword: string): Promise<PlantVariety[]> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      WHERE slug        LIKE \"%${keyword}%\"                           \
      OR    name        LIKE \"%${keyword}%\"                           \
      OR    common_name LIKE \"%${keyword}%\"                           \
      OR    genus       LIKE \"%${keyword}%\"                           \
      OR    family      LIKE \"%${keyword}%\"                           \
      LIMIT 100;                                                        \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : undefined);
    });
  })
}


module.exports = {
  getPlant,
  getPlants,
  insert,
  insert_scientific,
  getItems,
  getInstructions,
  getScientificDetails,
  addScientificDetails,
  getPlantsByKeyword,
}
