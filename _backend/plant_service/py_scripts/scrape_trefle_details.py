"""
    _backend/plant_service/py_scripts/scrape_trefle_details.py:
        
        This script should be called from the root directory with
        `run npm scrape:plant_details`.  It will request the details of
        each plant_variety returned by `run npm scrape:plant_varieites`.
        Data is output to
        `_backend/plant_service/data/details/[start]-[end].json.gz`
        in chunks of ENTRIES_PER_FILE.
        Each file will be in compressed (gzip) json format as an array
        of json objects.
"""
import gzip
import json
import os
import pickle
import requests
import sys

import tqdm

TOKEN='TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'
OUTDIR='_backend/plant_service/data/details'

ENTRIES_PER_FILE=16384

if __name__ == '__main__':
    if not os.path.exists(OUTDIR):
        os.makedirs(OUTDIR)


    #with gzip.open('_backend/plant_service/data/plant_varieties.json.gz','r') as fh:
    with gzip.open('_backend/plant_service/data/test.json.gz','r') as fh:
        plant_varieties = json.load(fh)
        
    plant_details = []
    start = 0
    end = 0
    entry_counter = 0

    for plant in tqdm.tqdm(plant_varieties):

        page = 'https://trefle.io/api/v1/plants/' + str(plant['id']) + \
                '?token=' + TOKEN
        resp = requests.get(page)

        # Response code is > 400, something is probably wrong ...
        if not resp:
           print("Error retrieving {}:".format(page))
           continue

        # Get the json data and add to the list
        json_data = resp.json()
        plant_details.extend(json_data['data'])

        entry_counter += 1
        entry_counter %= ENTRIES_PER_FILE
        # Write a new file ever ENTRIES_PER_FILE plants
        if entry_counter == 0:
            end += ENTRIES_PER_FILE
            outfile = os.path.join(OUTDIR,str(start).zfill(6)+'-' + \
                    str(end-1).zfill(6)+'json.gz')
            with gzip.open(outfile,'wt') as fh:
                json.dump(plant_details,fh)
            plant_details = []
            start = end

    # Need to write the remaining entries to a file ...
    end += entry_counter
    outfile = os.path.join(OUTDIR,str(start).zfill(6)+'-' + \
            str(end-1).zfill(6)+'json.gz')
    with gzip.open(outfile,'wt') as fh:
        json.dump(plant_details,fh)


    
