const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export async function getPlants(query?: string) {
  let plants;
  try {
    plants = await (await fetch(`${url}/plant?${query ? query : ''}`)).json();
  } catch {
    return null;
  }
  return plants
}

export async function getPlant(slug) {
  let plant;
  try {
    plant = await (await fetch(`${url}/plant/${slug}`)).json();
  } catch {
    return null;
  }

  const scientific = await (await fetch(`${url}/plant/scientific/${slug}`)).json();

  const items = await (await fetch(`${url}/plant/items/${slug}`)).json();

  if (scientific.wiki) {
    const wikiUrl = scientific.wiki.replace("wiki/", "w/api.php?action=query&format=json&prop=extracts&exchars=600&explaintext=1&formatversion=2&titles=")
    const wikiInfo = await (await fetch(wikiUrl)).json();
    if (wikiInfo.query.pages && wikiInfo.query.pages.length && wikiInfo.query.pages[0].extract) {
      return {
        general: { ...plant, description: wikiInfo.query.pages[0].extract },
        items: items,
        scientific: scientific
      }
    }
  }
  return {
    general: { ...plant },
    items: items,
    scientific: scientific
  }
}

export async function getPlantsByKeyword(text) {
  const plants = await fetch(`${url}/plant/search/${text}`);
  return plants.json();
}

export async function getPlantItems(slug) {
  const items = await fetch(`${url}/plant/items/${slug}`);
  return items.json();
}