"""
    This script creates a csv of paired entries of plant_variety slugs
    and their corresponding minimum number of frost free days (ffdm). By using
    the range search functionality of the trefle.io api. 

    The information is output to the file 
    _backend/plant_service/data/plant_frost_free_days_minimum.csv
"""
import os
import sys
import requests
from glob import glob

import numpy as np
import pandas as pd
from tqdm import tqdm

TOKEN = 'TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'


if __name__ == '__main__':
    # directory of this script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # where the data is kept ....
    data_dir = os.path.abspath(os.path.join(script_dir,'../../data/'))
    # target output file
    outfile = os.path.abspath(os.path.join(script_dir,'../../data/plants_frost_free_days_minimum.csv'))
    out_fh = open(outfile,'w')

    print("slug,ffdm", file=out_fh)
    for i in tqdm(range(0,366)):
        page = "/api/v1/species?range%5Bfrost_free_days_minimum%5D="+str(i)+"%2C"+str(i+1)
        done = False
        plant_slugs = []
        while(not done):
            resp = requests.get('https://trefle.io' + page + '&token=' + TOKEN)

            # Response code is > 400, something is probably wrong ...
            if not resp:
                print("Error retrieving {}:".format(page), file=sys.stderr)
                exit(1)

            # Get the json data and perform some sanity checks
            json_data = resp.json()
            if 'links' not in json_data:
                print("Error retrieving {}:".format(page), file=sys.stderr)
                exit(1)

            # If there is no next, this is the last page
            if 'next' not in json_data['links']:
                done = True
            else:
                page = json_data['links']['next']

            for p in json_data['data']:
                print('{},{}'.format(p['slug'],str(i)), file=out_fh)
       
    out_fh.close()
