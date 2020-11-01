import {
  PlantInstruction,
  PlantItem, PlantScientificDetails,
  PlantVariety
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
        ORDER BY img_url                                                  \
        LIMIT ${offset},${limit};                                         \
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
      ORDER BY img_url                                                  \
      LIMIT ${offset},${limit};                                         \
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
        \"${trefle_id}\", \
        \"${slug}\", \
        \"${name}\", \
        \"${common_name}\", \
        \"${genus}\", \
        \"${family}\", \
        \"${img_url}\" \
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
      INSERT INTO plant_scientific_details (slug, wiki, description, ph_low, ph_high, temperature_low, temperature_high, precipitation_low, precipitation_high, light, soil_salinity, soil_texture, soil_humidity) \
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
        ${data.soil_humidity} \
      );`
      , (err: any, results: any) => {
        if (err) reject(err);
        resolve(typeof results === 'undefined' ? 0 : 1);
      });
  })
}

function getItems(slug: string): Promise<Array<PlantItem>> {
  return new Promise((resolve, reject) => {
    connection.query(` \
      SELECT * \
      FROM plant_items \
      WHERE slug=${connection.escape(slug)}; \
    `, (err: any, results: Array<Array<PlantItem>>) => {
      if (err) reject(err);
      resolve(typeof results !== 'undefined' ? results[1] : []);
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
