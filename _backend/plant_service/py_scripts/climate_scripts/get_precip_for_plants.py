"""
    This script creates a csv of paired entries of plant_variety slugs
    and their corresponding min/max precipitation. By using
    the range search functionality of the trefle.io api. 

    The information is output to the file 
    _backend/plant_service/data/climate_plant_precipitation_range.csv
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

    plants = {}
    count_min = 0
    count_max = 0
    # search mins
    for i in tqdm(range(0,12000,100)):
        page = "/api/v1/species?range%5Bminimum_precipitation_mm%5D="+str(i)+"%2C"+str(i+100)
        done = False
        while(not done):
            resp = requests.get('https://trefle.io' + page + '&token=' + TOKEN)
            json_data = resp.json()
            # If there is no next, this is the last page
            if 'next' not in json_data['links']:
                done = True
            else:
                page = json_data['links']['next']

            for p in json_data['data']:
                plants[p['slug']] = [i,-1]
                count_min += 1

    # search maxs
    for i in tqdm(range(0,12000,100)):
        page = "/api/v1/species?range%5Bmaximum_precipitation_mm%5D="+str(i)+"%2C"+str(i+100)
        done = False
        while(not done):
            resp = requests.get('https://trefle.io' + page + '&token=' + TOKEN)
            json_data = resp.json()
            # If there is no next, this is the last page
            if 'next' not in json_data['links']:
                done = True
            else:
                page = json_data['links']['next']

            for p in json_data['data']:
                plants[p['slug']][1] = i+100
                count_max += 1

    if count_min != count_max:
        print("ERROR count_min != count_max")

    outfile = os.path.abspath(os.path.join(script_dir,'../../data/climate_plants_precipitation_range.csv'))
    with open(outfile,'w') as out_fh:
        print("slug,min_precip,max_precip", file=out_fh)
        for p in sorted(plants.keys()):
            print("{},{},{}".format(p,str(plants[p][0]),str(plants[p][1])),file=out_fh)
