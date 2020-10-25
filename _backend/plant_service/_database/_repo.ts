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

function getPlants(offset:number=0, limit:number=20): Promise<PlantVariety[]> {
  return new Promise((resolve, reject) => {
    connection.query(`                                                  \
      SELECT slug, name, common_name, genus, family, img_url            \
      FROM plant_varieties                                              \
      LIMIT ${offset},${limit};                                                          \
    `, (err: any, results: Array<PlantVariety>) => {
      if (err) reject(err);
      resolve(results.length > 0 ? results : undefined);
    });
  })
}


function insert(slug: string, name: string, common_name: string, genus: string, family: string, img_url: string) {
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
      INSERT INTO plant_varieties (slug, name, common_name, genus, family, img_url)     \
      VALUES (                                                          \
        \"${slug}\",                                                    \
        \"${name}\",                                                    \
        \"${common_name}\",                                             \
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

module.exports = {
  getPlant,
  getPlants,
  insert,
  getItems,
  getInstructions,
  getScientificDetails,
}
