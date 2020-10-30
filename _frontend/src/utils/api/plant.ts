const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export async function getPlants(query?: string) {
  console.log(`${url}/plant?${query ? query : ''}`)
  const plants = await fetch(`${url}/plant?${query ? query : ''}`);
  if (plants) return await plants.json();
  return [];
}

export async function getPlant(slug) {
  const plant = await (await fetch(`${url}/plant/${slug}`)).json();
  const scientific = await (await fetch(`${url}/plant/scientific/${slug}`)).json();
  

  if (scientific.wiki) {
    const wikiUrl = scientific.wiki.replace("wiki/", "w/api.php?action=query&format=json&prop=extracts&exchars=600&explaintext=1&formatversion=2&titles=")
    const wikiInfo = await (await fetch(wikiUrl)).json();
    if (wikiInfo.query.pages && wikiInfo.query.pages.length) {
      return {
        general: {...plant, description: wikiInfo.query.pages[0].extract},
        scientific: scientific
      }
    }
  }
  return {
    general: plant,
    scientific: scientific,
  }
}

export async function getPlantsByKeyword(text) {
  const plants = await fetch(`${url}/plant/search/${text}`);
  return plants.json();
}