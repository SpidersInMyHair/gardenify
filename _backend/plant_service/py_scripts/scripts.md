## Python Scripts

### [climate/get_climate_by_postcode.py](climate/get_climate_by_postcode.py)
Combines [climate data](../data/climate) with [postcode](../data/P0A06aAust) to get climate information for each Australian postcode.

### [climate/get_ffdm_for_plants.py](climate/get_ffdm_for_plants.py)
Scrapes trefle for frost information about plants.

### [climate/get_humidity_for_plants.py](climate/get_humidity_for_plants.py)
Scrapes trefle for humidity information about plants.

### [climate/get_precip_for_plants.py](climate/get_precip_for_plants.py)
Scrapes trefle for precipitation information about plants.

### [climate/merge_climate_info.py](climate/merge_climate_info.py)
Merges the outputs of the above three scripts into one csv.

### [get_plant_varieties.py](get_plant_varieties.py)
Converts [plant_varieties.json.gz](../data/plant_varieties.json.gz) to [plant_varieties.csv](../data/plant_varieties.csv).

### [scrape_trefle_distribution_details.py](scrape_trefle_distribution_details.py)
Scrape trefle for distribution information.

### [scrape_trefle_distributions.py](scrape_trefle_distributions.py)
Scrape trefle for plants belonging to each distribution.

### [scrape_trefle_families.py](scrape_trefle_families.py)
Scrape plant family information from trefle.

### [scrape_trefle_plants.py](scrape_trefle_plants.py)
Scrape every single plant from trefle.

### [source_garden_detail.py](source_garden_detail.py)
Requests scientific information from trefle to dynamically populate the plant_scientific_details table.
