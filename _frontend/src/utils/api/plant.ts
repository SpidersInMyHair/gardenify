const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export async function getAllPlants() {
  const plants = await fetch(`${url}/plant`);
  return await plants.json();
}

export async function getPlant(slug) {
  const plant = await (await fetch(`${url}/plant/${slug}`)).json();
  const scientific = await (await fetch(`${url}/plant/scientific/${slug}`)).json();
  return {
    general: plant,
    scientific: scientific
  }
}

export async function getPlantsByKeyword(text) {
  const plants = await fetch(`${url}/plant/search/${text}`);
  return plants.json();
}