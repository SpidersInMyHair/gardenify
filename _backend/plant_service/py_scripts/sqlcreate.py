import json
import os
import pathlib

query = "VALUES"

species_json = os.path.join(pathlib.Path(__file__).parent.absolute(),'species.json')
with open(species_json) as json_file:
    data = json.load(json_file)
    for plant in data:
        query += """\n("{}", "{}", "{}", "{}", "{}", "{}"),""".format(
            plant["slug"],
            plant["scientific_name"],
            plant["common_name"],
            plant["genus"],
            plant["family"],
            plant["image_url"]
        )
query = query[:-1] + ";"

print(query)
