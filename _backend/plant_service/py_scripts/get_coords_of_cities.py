# -*- coding: utf-8 -*-
import requests
import sys
import csv

api_key = '22b7928d3c944306b7008ed6f10bdf38'
api_url = 'https://api.opencagedata.com/geocode/v1/json?key=' + api_key
with open(sys.argv[1]) as filename:
    reader = csv.reader(filename, delimiter=',', quotechar='"')
    cities = list(reader)
 

    res = []
    count = 0
    for i in cities:
        city = ''
        print(i[1])
        city = i[1].replace('Is.', 'Island')
        city = city.replace('I.', 'Island')
        city = city.replace(' ', '+')
        #print(city)
        response = requests.get(api_url+'&q='+city).json()
        #print(response['results'][0]['annotations']['DMS']['lat'])
        try:
            lat = response['results'][0]['annotations']['DMS']['lat']
            lng = response['results'][0]['annotations']['DMS']['lng']
            coords = [lat, lng]
            coords_res = [float(coords[0].split('°')[0]), float(coords[1].split('°')[0]), city]
            if (coords[0][-1] == 'S'):
                coords_res[0] = -coords_res[0]
            if coords[1][-1] == 'W':
                coords_res[1] = -coords_res[1]  

            res.append(coords_res)
            count += 1
        except:
            res.append([0,0])


        with open('res.csv', 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(res)
            res = []
