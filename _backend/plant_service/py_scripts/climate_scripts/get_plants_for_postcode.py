"""
    Overlay postcode shapefile obtained from 
    (https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/2923.0.30.0012006)
    on top of arc/info grid data obtained from BOM
    (http://www.bom.gov.au/climate/averages/maps.shtml)
    to obtain averages by postcode and output to a csv
"""
import os
import sys
import requests
from glob import glob

import numpy as np
import pandas as pd
from tqdm import tqdm

TOKEN = 'TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'

def tentative(frost_free):
    page = "/api/v1/species?range%5Bfrost_free_days_minimum%5D=%2C"+frost_free
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

        plant_slugs.extend([p['slug'] for p in json_data['data']])
        
    return plant_slugs

if __name__ == '__main__':
    # directory of this script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # where the data is kept ....
    data_dir = os.path.abspath(os.path.join(script_dir,'../../data/'))
    # target output file
    outfile = os.path.abspath(os.path.join(script_dir,'../../data/plants_by_postcode.csv'))
    out_fh = open(outfile,'w')

    page = '/api/v1/plants?page=1'
    req = 'https://trefle.io' + page + '&token=' + TOKEN

    climate_data = pd.read_csv(os.path.join(data_dir,'climate_by_postcode.csv'))
    for index,row in climate_data.iterrows():
        post_code =  str(int(row.post_code))
        frost_free = str(int(366 - np.floor(row.frostann)))
        print('{},{}'.format(post_code,str(len(tentative(frost_free)))))
