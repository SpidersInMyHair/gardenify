"""
    _backend/plant_service/py_scripts/scrape_trefle_plants.py:
        
        This script should be called from the root directory with
        `run npm scrape:plant_varieties`.  It will request each 
        page of results from trefle.io/api/v1/plants and output 
        the data to `_backend/plant_service/data/plant_varieties.json.gz`.
        This file will be in compressed (gzip) json format as an array
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
OUTDIR='_backend/plant_service/data'

if __name__ == '__main__':
    if not os.path.exists(OUTDIR):
        os.makedirs(OUTDIR)
    plant_list = []
    page = '/api/v1/plants?page=1'
    req = 'https://trefle.io'+page+'&token='+TOKEN

    done = False
    pbar = None
    while(not done):
        resp = requests.get('https://trefle.io'+page+'&token='+TOKEN)

        # Response code is > 400, something is probably wrong ...
        if not resp:
           print("Error retrieving {}:".format(page),file=sys.stderr)
           exit(1)

        # Get the json data and perform some sanity checks
        json_data = resp.json()
        if 'links' not in json_data:
           print("Error retrieving {}:".format(page),sys.stderr)
           exit(1)

        # One of init of tqdm so we can have a pretty loading bar  
        if pbar is None:
            n_pages = int(json_data['links']['last'].split('=')[-1])
            pbar = tqdm.tqdm(total=n_pages)

        # If there is no next, this is the last page
        if 'next' not in json_data['links']:
            done = True
        else:
            page = json_data['links']['next']

        plant_list.extend(json_data['data'])

        pbar.update()

    with gzip.open(os.path.join(OUTDIR,'plant_varieties.json.gz'),'wt') as fh:
        json.dump(plant_list,fh)
    
