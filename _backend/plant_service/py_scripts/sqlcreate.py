import json
import os
import pathlib

export_keys = ['slug','scientific_name','common_name','genus','family','image_url']

query = "["

# This is assuming that 'species.json' will always be in the same folder
# as the source code.... although this will probably change to making an
# api call ...
species_json = os.path.join(pathlib.Path(__file__).parent.absolute(),'species.json')

with open(species_json) as json_file:
    data = json.load(json_file)
    for plant in data:
        key_pairs = ['"'+ k + '":"' + str(plant[k]) + '"' for k in export_keys]
        query += '{' +','.join(key_pairs) +  '},'
query = query[:-1] + "]"

print(query)
