"""
"""
import gzip
import json
import os
import pickle
import requests
import sys
import csv

import tqdm

TOKEN = 'TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'
OUTDIR = '_backend/plant_service/data'

if __name__ == '__main__':
    if not os.path.exists(OUTDIR):
        os.makedirs(OUTDIR)
    page = '/api/v1/families?page=1'
    req = 'https://trefle.io' + page + '&token=' + TOKEN

    done = False
    pbar = None

    data_file = open(os.path.join(OUTDIR, 'families.csv'), 'w')

    csv_writer = csv.writer(data_file)

    csv_writer.writerow(("slug", "name", "common_name"))

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

        # One of init of tqdm so we can have a pretty loading bar
        if pbar is None:
            n_pages = int(json_data['links']['last'].split('=')[-1])
            pbar = tqdm.tqdm(total=n_pages)

        # If there is no next, this is the last page
        if 'next' not in json_data['links']:
            done = True
        else:
            page = json_data['links']['next']

        for family in json_data['data']:
            csv_writer.writerow((
                family["slug"], family["name"], family["common_name"]
            ))

        pbar.update()
