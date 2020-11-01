"""
    _backend/plant_service/py_scripts/get_plant_varieties.py:

    This script simply reads from the gzipped plant_varieties.json.gz file
    and returns a json list of information to be added to the database
    during initialization
"""
import gzip
import json
import os
import pathlib


export_keys = ['id', 'slug', 'scientific_name', 'common_name',
               'family_common_name', 'genus', 'family', 'image_url']

query = "["

# This is assuming that 'species.json' will always be in the same folder
# as the source code.... although this will probably change to making an
# api call ...
plant_varieties_json = os.path.join(
    pathlib.Path(__file__).parent.absolute(),
    '../data/plant_varieties.json.gz'
)

max_len = 0
with gzip.open(plant_varieties_json) as json_file:
    data = json.load(json_file)
    for plant in data:
        if plant['rank'] != 'species':
            continue
        key_pairs = [f'"{k}":"{str(plant[k])}"' for k in export_keys]
        query += f'{{{",".join(key_pairs)}}},'
        # max_len = max(max_len,max([len(str(plant[k])) for k in export_keys]))
query = query[:-1] + "]"

print(query)
