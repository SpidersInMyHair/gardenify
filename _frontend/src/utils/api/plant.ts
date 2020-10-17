const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export async function getAllPlants() {
  const plants = await fetch(`${url}/plant`);
  return await plants.json();
}
export async function getPlantBySlug(slug) {
  const plant = await fetch(`${url}/plant/${slug}`);
  return plant.json()
}
