"""
    Overlay postcode shapefile obtained from 
    (https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/2923.0.30.0012006)
    on top of arc/info grid data obtained from BOM
    (http://www.bom.gov.au/climate/averages/maps.shtml)
    to obtain averages by postcode and output to a csv

    TODO: currently there is a bug which means that annual frost counts are out of wack.  Need to fix.

"""
import os
from glob import glob

import fiona
import rasterio
import rasterio.mask
import numpy as np
from tqdm import tqdm

#import sys
#import seaborn as sns
#import matplotlib.pyplot as plt

if __name__ == '__main__':
    """
    shapefile = fiona.open('data/POA06aAUST_region.shp')
    src = rasterio.open('data/maxann.txt')

    shapes = [feature["geometry"] for feature in shapefile]
    post_codes = [feature['properties']['POA_2006'] for feature in shapefile]

    out_image, out_transform = rasterio.mask.mask(src, [shapes[post_codes.index(sys.argv[1])]],crop=True)

    out_image[out_image==-9999] = np.nan
    print(np.nanmean(out_image))
    #sns.heatmap(out_image[0])
    #plt.show()
    """
    script_dir = os.path.dirname(os.path.realpath(__file__))
    data_dir = os.path.abspath(os.path.join(script_dir,'../data/climate'))
    outfile = os.path.abspath(os.path.join(script_dir,'../data/climate_by_postcode.csv'))
    out_fh = open(outfile,'w')

    # load the shapefile with postcodes
    postcode_shapefile = fiona.open(os.path.join(data_dir,'POA06aAUST',
            'POA06aAUST_region.shp'))

    # create a dictionary of each of the rasters
    climate_dataframes = {}
    for txt in glob(os.path.join(data_dir,'*.txt')):
        txt = os.path.basename(txt)
        print(txt)
        df_name = txt.split('.')[0]
        climate_dataframes[df_name] = rasterio.open(os.path.join(data_dir,txt))

    climate_keys = sorted(climate_dataframes.keys())
    # write out the header
    print('post_code,'+','.join(climate_keys),file=out_fh)

    # for each polygon (postcode), calculate the averages for each climate map
    def masked_mean(shape,raster):
        values,_ = rasterio.mask.mask(raster,[shape],crop=True, all_touched=True) 
        values[values==raster.nodata] = np.nan
        return str(np.nanmean(values))

    for polygon in tqdm(postcode_shapefile):
        post_code = polygon['properties']['POA_2006']
        try:
            print(post_code + ',' + ','.join([masked_mean(polygon['geometry'],
                climate_dataframes[k]) for k in climate_keys]), file=out_fh)
        except:
            pass
    out_fh.close()

    postcode_shapefile.close()
    for k in climate_dataframes.keys():
        climate_dataframes[k].close()

