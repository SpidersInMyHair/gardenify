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
        city = i[1].replace('Is.', 'Island')
        city = city.replace('I.', 'Island')
        #print(city)
        response = requests.get(api_url+'&q='+city).json()
        coords = [
                    response['results'][0]['annotations']['DMS']['lat'], 
                    response['results'][0]['annotations']['DMS']['lng']
        ]
        coords_res = [float(coords[0][:2]), float(coords[1][:2]), city]
        if (coords[0][-1] == 'S'):
            coords_res[0] = -coords_res[0]
        if coords[1][-1] == 'W':
            coords_res[1] = -coords_res[1]  

        res.append(coords_res)
        if count == 3:
            break

    with open('res.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for row in res:
            writer.writerow(row)