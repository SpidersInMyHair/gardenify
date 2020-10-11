'''
    Script to access the Trefle API that returns general and scientific information about plants and species.
    Currently, the Trefle 'species' endpoint is used, as only 'species' provides scientific info regarding 
    the plant.

    So far, using this script you can:
        * get all plants/species listed on in the Trefle database
        * search for a plant using a keyword (eg. banana), will return all plants that contain 'banana' in the 
        'common_name' field. 

    Regarding 'varieties' of plants, the above search endpoint will return all varieties of that plant.
'''

import requests
import json
from ppretty import ppretty
from growth import Growth
from plant import Plant

trefle_token = "dpOhO85-PpBjecAitIqybBGWuwUvOoPLiJmvj_LypVM"
species_endpoint = "https://trefle.io/api/v1/species"
plants_endpoint = "https://trefle.io/api/v1/plants"

def set_growth_att(growth, key, value):
    if key == 'description':
        growth.set_desc(value)
    elif key == 'days_to_harvest':
        growth.set_days_to_harv(value)
    elif key == 'growth_months':
        growth.set_growth_months(value)
    elif key == 'minimum_precipitation':
        growth.set_precip_min(value['mm'])
    elif key == 'maximum_precipitation':
        growth.set_precip_max(value['mm'])
    elif key == 'minimum_temperature':
        growth.set_temp_min(value['deg_c'])
    elif key == 'maximum_temperature':
        growth.set_temp_max(value['deg_c'])
    elif key == 'ph_maximum':
        growth.set_ph_min(value)
    elif key == 'ph_minimum':
        growth.set_ph_max(value)
    elif key == 'light':
        growth.set_light(value)
    return growth

# Returns formatted JSON object
def format_json(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    return text

# Returns repsonse from GET request
def get_response(url):
    return requests.get(url+trefle_token)

# GET all species
def get_all_plants():
    response = get_response(species_end+'?token=')
    num_plants = response.json()['meta']['total']
    for i in range(num_plants):
        data_res = response.json()['data'][i]
        print(format_json(data_res))

# GET a plant's info using its Trefle id
def get_plant_using_id(id):
    response = get_response(species_endpoint+'/' + str(id) + '?token=')
    data_res = response.json()['data']
    plant_growth = Growth()
    for key, value in data_res['growth'].items():
        plant_growth = set_growth_att(plant_growth, key, value)
    plant = Plant(data_res['common_name'], data_res['vegetable'], data_res['observations'], 
                data_res['image_url'])
    plant.set_growth(plant_growth)
    # Uncomment below line to pretty print the plant information
    print(ppretty(plant, seq_length=20))

# Search for a plant using a keyword
def search_plant(keyword):
    response = get_response(species_endpoint+'/search?q=' + keyword + '&token=')
    num_search_res = response.json()['meta']['total']
    print('GET status code for searching "' + keyword + '": ' +str(response.status_code))
    if num_search_res == 0:
        print('No results found for "' + keyword + '"...')
    elif num_search_res == 1:
        id = response.json()['data']['id']
        get_plant_using_id(id)
    else:
        for i in range(num_search_res-1):
            id = response.json()['data'][i]['id']
            get_plant_using_id(id)

# Main
def main():
    #get_all_plants()
    search_plant('banana')


# Start of program
main()