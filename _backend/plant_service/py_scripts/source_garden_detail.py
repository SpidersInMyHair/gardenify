'''
    Script to access the Trefle API that returns general and scientific information about plants and species.
    Currently, the Trefle 'species' endpoint is used, as only 'species' provides scientific info regarding 
    the plant.

    So far, using this script you can:
        * get all plants/species listed on in the Trefle database
        * search for a plant using a keyword (eg. banana), will return all plants that contain 'banana' in the 
        'common_name' field. 

    Regarding 'varieties' of plants, the above search endpoint will return all varieties of that plant.

    Perhaps, when a user searched for plants that are not in the database, this script is activated and populates
    it...
'''

import requests
import json
from ppretty import ppretty
import plant
import growth
import spec  

trefle_token = "TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg"
species_endpoint = "https://trefle.io/api/v1/species"
plants_endpoint = "https://trefle.io/api/v1/plants"

# Returns formatted JSON object
def format_json(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    return text

# Returns repsonse from GET request
def get_response(url):
    # print(url+trefle_token)
    return requests.get(url+trefle_token)

# GET all species
def get_all_plants():
    response = get_response(species_endpoint+'?token=')
    # num_plants = response.json()['meta']['total']
    f = open("species.json", "w")
    f.write(format_json(response.json()['data']))
    f.close()
    # for i in range(num_plants):
    #     data_res = response.json()['data'][i]
    #     print(format_json(data_res))

# GET a plant's info using its Trefle id
def get_plant_using_id(id):
    response = get_response(species_endpoint+'/' + str(id) + '?token=')
    data_res = response.json()['data']

    pt = plant.Plant()
    pt_gr = growth.Growth()
    pt_sp = spec.Spec()

    for key, value in data_res.items():
        pt = plant.set_plant_att(pt, key, value)
    for key, value in data_res['growth'].items():
        pt_gr = growth.set_growth_att(pt_gr, key, value)
    for key, value in data_res['specifications'].items():
        pt_sp = spec.set_spec_att(pt_sp, key, value)
    
    pt.set_growth(pt_gr)
    pt.set_spec(pt_sp)

    # Uncomment below line to pretty print the plant information
    print(ppretty(pt, seq_length=30))

# Search for a plant using a keyword
def search_plant(keyword):
    response = get_response(species_endpoint+'/search?q=' + keyword + '&token=')
    num_search_res = len(response.json()['data'])
    print('GET status code for searching "' + keyword + '": ' +str(response.status_code))
    if num_search_res == 0:
        print('No results found for "' + keyword + '"...')
    else:
        print('Retrieving results, may take a while...')
        for i in range(num_search_res):
            if (i+1) % 5 == 0:
                print(str(i+1) + ' results processed...')
            id = response.json()['data'][i]['id']
            get_plant_using_id(id)
        print(str(num_search_res) + ' results found for "' + keyword + '"...')

# Main
def main():
    get_all_plants()
    #search_plant('fig')

# Start of program
main()
