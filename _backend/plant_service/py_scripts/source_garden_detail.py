'''
    Usage: python source_garden_details.py PLANT_NAME
    Prints out the plant variety and scientific
    information relating to the passed in parameter
    PLANT_NAME in JSON format. This script needs to
    be called by our system when the user prompts for
    a plant that does not exist in our database. This
    script will return the JSON needed to update the
    database. Matches against 'common-name', 'slug'
    and 'scientific_name' are returned. Currently,
    the Trefle 'species' endpoint is used, as only
    'species' provides scientific info regarding the
    plant. Regarding 'varieties' of plants, the above
    search endpoint will return all varieties of that plant.
'''

import requests
import json
import sys

trefle_token = 'TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'
species_endpoint = 'https://trefle.io/api/v1/species'
plants_endpoint = 'https://trefle.io/api/v1/plants'

# To be changed if receiving more information about the plant

plant_att = ['common_name', 'scientific_name', 'slug', 'vegetable',
             'observations', 'image_url', 'edible', 'genus', 'family']

growth_att = ['description', 'days_to_harvest', 'bloom_months',
              'row_spacing', 'spread', 'growth_months',
              'maximum_precipitation', 'minimum_precipitation',
              'maximum_temperature', 'minimum_temperature',
              'ph_maximum', 'ph_minimum', 'light', 'soil_nutriments',
              'soil_salinity', 'soil_texture', 'soil_humidity']

spec_att = ['growth_habit', 'growth_rate', 'avg_height', 'shape', 'toxic']


def set_dict_att(dict, set_of_att):
    temp_dict = {}
    for key, value in dict.items():
        if key in set_of_att:
            temp_dict[key] = value
    return temp_dict


# Returns formatted JSON object
def format_json(obj):
    # text = json.dumps(obj, sort_keys=True, indent=4)
    text = json.dumps(obj, sort_keys=True)
    return text


# Returns repsonse from GET request
def get_response(url):
    return requests.get(url + trefle_token)


# GET a plant's info using its Trefle id
def get_plant_using_id(id):
    response = get_response(species_endpoint + '/' + str(id) + '?token=')
    if not response:
        return '{}'
    data_res = response.json()['data']

    plant_dict = set_dict_att(data_res, plant_att)
    grow_dict = set_dict_att(data_res['growth'], growth_att)
    spec_dict = set_dict_att(data_res['specifications'], spec_att)

    plant_dict.update(grow_dict)
    plant_dict.update(spec_dict)

    plant_dict.update({'wiki': next(
        (x['url'] for x in data_res['sources'] if x['name'] == 'Wikipedia'),
        None).replace(' ', '_')
    })

    # Uncomment below line to pretty print the plant information
    # print(ppretty(pt, seq_length=30))
    return(format_json(plant_dict))


# Search for a plant using a keyword
def search_plant(keyword):
    response = get_response(species_endpoint + '/search?q=' + keyword + '&token=')
    num_search_res = len(response.json()['data'])
    res_json = ''
    if num_search_res == 0:
        res_json = 'N'
        # print(f'No results found for "{keyword}"...')
    else:
        # print('Retrieving results, may take a while...')
        for i in range(num_search_res):
            # if (i+1) % 5 == 0:
                # print(f'{str(i+1)} results processed...')
            id = response.json()['data'][i]['id']
            res_json += get_plant_using_id(id) + ','
        # print(f'{str(num_search_res)} results found for "{keyword}"...')
    return res_json


# Main
def main():
    res_json = get_plant_using_id(sys.argv[1])
    print(res_json)


# Start of program
main()
