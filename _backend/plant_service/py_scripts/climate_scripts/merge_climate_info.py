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

    # postcode
    pc = pd.read_csv(os.path.join(data_dir,'climate_by_postcode.csv'))

    # humidity
    ph = pd.read_csv(os.path.join(data_dir,'climate_plants_humidity.csv'))
    # precipitation
    pp = pd.read_csv(os.path.join(data_dir,'climate_plants_precipitation_range.csv'))
    # free from frost days
    pf = pd.read_csv(os.path.join(data_dir,'plants_frost_free_days_minimum.csv'))

    # merged
    # NOTE: to be used with mysql, empty/NA values should be replaced with \N
    pm = ph.merge(pf,how='outer').merge(pp,how='outer')
    outfile = os.path.abspath(os.path.join(script_dir,'../../data/climate_plants_merged.csv'))
    pm.to_csv(outfile,index=False)

    # and work out which plants are appropriate for which postcodes
    outfile = os.path.abspath(os.path.join(script_dir,'../../data/plants_by_postcode.csv'))
    fh = open(outfile,'w') 
    print("post_code,slug,humid,precip,frost",file=fh)
    for _,town in tqdm(list(pc.iterrows())):
        for _,plant in pm.iterrows():
            match = 0
            match_humidity = -1 if np.isnan(plant.humidity) else 0
            match_precip = -1 if np.isnan(plant.min_precip) else 0
            match_frost = -1 if np.isnan(plant.ffdm) else 0
            # check humidity range
            if match_humidity == 0 and plant.humidity <= (town.rh9an/10):
                match_humidity = 1
                match = 1
            # Check precipitation range
            if match_precip == 0 and town.rainan >= plant.min_precip and \
                    town.rainan <= plant.max_precip:
                match_precip = 1
                match = 1
            # Check frost free day
            if match_frost == 0 and 365-np.floor(town.frostann) >= plant.ffdm:
                match_frost = 1
                match = 1
            # If there are too many frost days, exclude this from matching
            if match_frost == 0:
                match = 0
               
            if match:
                print('{},{},{},{},{}'.format(str(int(town.post_code)),plant.slug,
                    match_humidity,match_precip,match_frost),file = fh)

    fh.close()
