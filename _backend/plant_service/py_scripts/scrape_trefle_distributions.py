"""
    _backend/plant_service/py_scripts/scrape_trefle_distributions.py:
    get the plants associated with each distribution and print out to
    a csv
"""
import gzip
import json
import os
import pickle
import requests
import sys

import tqdm

TOKEN = 'TT0YMVWeTRKWrzxRsmJ1Xs2E02HvnQpfZZ7UN3BOqKg'
OUTDIR = '_backend/plant_service/data'

if __name__ == '__main__':
    if not os.path.exists(OUTDIR):
        os.makedirs(OUTDIR)

    distribution_slugs = []

    page = '/api/v1/distributions?page=1'
    req = 'https://trefle.io' + page + '&token=' + TOKEN

    done = False
    pbar = None
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

        for d in json_data['data']:
            if d['tdwg_level'] > 2:
                distribution_slugs.append(d['slug'])

        pbar.update()

    fh = open(os.path.join(OUTDIR,'distributions.csv'),'a')
    #tmp = True 
    for d in tqdm.tqdm(distribution_slugs):
        #if tmp and d != 'guy':
        #    continue
        #else:
        #    tmp = False
        page = '/api/v1/distributions/'+d+'/species?page=1'
        req = 'https://trefle.io' + page + '&token=' + TOKEN

        done = False
        pbar = None
        seen = set()
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
                if p['slug'] not in seen:
                    seen.add(p['slug'])
                    print('{},{}'.format(d,p['slug']),file=fh)
            fh.flush()

    fh.close()
