import {
  PlantInstruction,
  PlantItem, PlantScientificDetails,
  PlantVariety
} from "../../../protos/_backend/plant_service/protos/plant_pb";

connection = require('./../../../_repository/_config').connection;

function getPlant(slug: string): Promise<PlantVariety> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      WHERE slug=\"${slug}\"                                                \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results[0] : undefined);
    });
  })
}

function getPlantId(slug: string, common_name: string, genus: string, family: string): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query(`                      \
      SELECT id                             \
      FROM plant_varieties                  \
      WHERE slug=\"${slug}\"                \
      AND   common_name=\"${common_name}\"  \
      AND   genus=\"${genus}\"  \
      AND   family=\"${family}\"  \
      LIMIT 1;                              \
    `, (err: any, results: Array<number>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results[0] : undefined);
    });
  })
}

function getPlants(): Promise<PlantVariety[]> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      LIMIT 20;                                                          \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : undefined);
    });
  })
}


function insertPlant(slug: string, name: string, common_name: string, genus: string, family: string, img_url: string) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      INSERT INTO plant_varieties (slug, name, common_name, genus, family, img_url)     \
      VALUES (                                                          \
        \"${slug}\",                                                    \
        \"${name}\",                                                    \
        \"${common_name}\",                                             \
        \"${genus}\",                                                   \
        \"${family}\",                                                  \
        \"${img_url}\",                                                 \
      );                                                                \
    `, (err: any, results: any) => {
      if (err) reject(err);
      resolve(results);
    });
  })
}

function insertSciInfo(plant_variety_id: number, ph_low: number, ph_high: number, temperature_low: number, temperature_high: number) {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      INSERT INTO plant_scientific_details (plant_variety_id, ph_low, ph_high, temperature_low, temperature_high)     \
      VALUES (                                                          \
        \"${plant_variety_id}\",                                        \
        \"${ph_low}\",                                                  \
        \"${ph_high}\",                                                 \
        \"${temperature_low}\",                                         \
        \"${temperature_high}\",                                        \
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
      WHERE plant_variety_id=\"${id}\"                                  \
      LIMIT 1;                                                          \
    `, (err: any, results: Array<PlantScientificDetails[]>) => {
      if (err) reject(err);
      resolve(results[1].length > 0 ? results[1][0] : undefined);
    });
  });
}

function postGardenSourceDetails(keyword: string): void {
  let {PythonShell} = require('python-shell');

  let options = {
    mode: 'json',
    //pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '_backend/plant_service/py_scripts/',
    args: [keyword]
  };

  let pyshell = new PythonShell('source_garden_details.py',options);

  pyshell.on('message', async function (response) {
    for (const i of response){
        let x = insertPlant(i.slug, i.scientific_name, i.common_name, i.genus, i.family, i.image_url);
        let id = getPlantId(i.slug, i.common_name, i.genus, i.family);
        let y = insertSciInfo((await id).valueOf(), i.ph_low, i.ph_high, i.temp_low, i.temp_high,  )
        await x;
    }
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
  insertPlant,
  insertSciInfo,
  getItems,
  getInstructions,
  getScientificDetails,
  postGardenSourceDetails,
  getPlantsByKeyword,
}
