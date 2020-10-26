'''
    Usage: python source_garden_details.py PLANT_NAME
    Prints out the plant variety and scientific information relating to the passed in parameter PLANT_NAME in JSON foramt

    This script needs to be called by our system when the user promts for a plant that does not exist in our database.
    thius cript will return the JSON needed to update the database

    Matches against 'common-name', 'slug' and 'scientific_name' are returned 

    Currently, the Trefle 'species' endpoint is used, as only 'species' provides scientific info regarding 
    the plant.

    Regarding 'varieties' of plants, the above search endpoint will return all varieties of that plant.
'''

import requests
import json
from ppretty import ppretty
import sys

trefle_token = "TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg"
species_endpoint = "https://trefle.io/api/v1/species"
plants_endpoint = "https://trefle.io/api/v1/plants"

# These are to be changed if we decide to go for more information aout the plant

plant_att =     ['common_name', 'scientific_name', 'slug', 'vegetable', 'observations',
                    'image_url', 'edible']

growth_att =    ['description', 'days_to_harvest', 'growth_months', 'precip_min', 'precip_max',
                'temp_min', 'temp_max', 'ph_min', 'ph_max', 'light']

spec_att =      ['growth_habit', 'growth_rate', 'avg_height', 'shape', 'toxic']

def set_dict_att(dict, set_of_att):
    temp_dict = {}
    for key, value in dict.items():
        if key in set_of_att:
            temp_dict[key] = value if value != None else 'N/A' 
    return temp_dict

# Returns formatted JSON object
def format_json(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    return text

# Returns repsonse from GET request
def get_response(url):
    return requests.get(url+trefle_token)

# GET a plant's info using its Trefle id
def get_plant_using_id(id):
    response = get_response(species_endpoint+'/' + str(id) + '?token=')
    data_res = response.json()['data']

    plant_dict = set_dict_att(data_res, plant_att)
    grow_dict = set_dict_att(data_res['growth'], growth_att)
    spec_dict = set_dict_att(data_res['specifications'], spec_att)

    plant_dict.update(grow_dict)
    plant_dict.update(spec_dict)
    
    # Uncomment below line to pretty print the plant information
    #print(format_json(plant_dict))
    return(format_json(plant_dict))

# Search for a plant using a keyword
def search_plant(keyword):
    response = get_response(species_endpoint+'/search?q=' + keyword + '&token=')
    num_search_res = len(response.json()['data'])
    #print('GET status code for searching "' + keyword + '": ' +str(response.status_code))
    res_json = ''
    if num_search_res == 0:
        res_json = 'N'
        #print('No results found for "' + keyword + '"...')
    else:
        #print('Retrieving results, may take a while...')
        for i in range(num_search_res):
            #if (i+1) % 5 == 0:
                #print(str(i+1) + ' results processed...')
            id = response.json()['data'][i]['id']
            res_json += get_plant_using_id(id) + ','
        #print(str(num_search_res) + ' results found for "' + keyword + '"...')
    return res_json

# Main
def main():
    res_json = '['
    res_json += search_plant(sys.argv[1])
    res_json = res_json[:-1] + ']'
    print(res_json)

# Start of program
main()