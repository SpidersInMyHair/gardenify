## plant\_service

### Endpoints 

This service provides the following endpoints see [plant_service/server.ts](plant_service/server.ts):

| endpoint                      | type  | Desciption                                                            |
|-------------------------------|-------|-----------------------------------------------------------------------|
|/plant/:slug                   | GET   | Get the summary of a plant variety given an slug.                     |
|/plant/                        | POST  | Create a new plant variety.                                           |
|/plant/items/:slug             | GET   | Get the items listed for a given plant variety.                       |
|/plant/instructions/:slug      | GET   | Get the ordered instructions listed for a given plant variety.        |
|/plant/scientific/:slug        | GET   | Get the scientific details of the plant variety with the given slug.  |
|/plant/search/:keyword         | GET   | Get the summary of all plants matching the keyword.                   |
|/plant/comments/:slug          | GET   | Get the user comments related to a particular plant (using slug)      |
|/plant/comments/:slug          | POST  | Post a user's comment about a particular plant.                       |
|/plant/distribution/:slug      | GET   | Get the summary of a distribution given a (distribution) slug.        |
|/plant/distribution/           | GET   | Get the list of distributions.                                        |
|/plant/distribution/in/:slug   | GET   | Get a list of plants in the distribution.                             |
|/plant/postcode/:postcode      | GET   | Get a list of plants suitable for the postcode.                       |

### MySQL Tables

*plant_families* -- table of all plants
- name -- test
- common_name
- plant_varieties
- common_name
- family
- genus
- trefle_id
- img_url
- name
- slug
*plant_items*
- slug
- item_name
*plant_instructions*
- slug
- step_number
- instruction
*plant_scientific_details*
- slug
- wiki
- description
- ph_low
- ph_high
- temperature_low
- temperature_high
- precipitation_low
- precipitation_high
- light
- soil_salinity
- soil_texture
- soil_humidity
- soil_nutriments
*plant_distribution_details*
- distribution_slug
- name
- tdwg_code
- level
- parent_slug
- parent_name
- species_count
*plant_distributions*
- distribution_slug
- slug
*comments*
- slug
- user_id
- date
- comment_description
*ratings*
- slug
- user_id
- date
- rating
*post_code_climates*
- pc
- frostann
- maxsum
- minwin
- rainan
- rh9an
*plant_climates*
- slug
- humidity
- ffdm
- min_precip
- max_precip

### Other
Also see [data](plant_service/data/data.md) and [scripts](plant_service/py_scripts/scripts.md)
which help support this functionality of the above endpoints.


## user\_service

### Endpoints
This service provides the following endpoints see [user_service/server.ts](user_service/server.ts):

| endpoint                      | type  | Desciption                                                            |
|-------------------------------|-------|-----------------------------------------------------------------------|
|/user                          | GET   | Get if user session is valid by examining cookies.                    |
|/user                          | POST  | Create a new user.                                                    |
|/user/:id                      | GET   | Get the user with the given id.                                       |
|/user/login                    | POST  | Login an user.                                                        |
|/user/logout                   | POST  | Logout an user.                                                       |
|/user/profile/:id              | GET   | Get the profile for the given user id.                                | 
|/user/profile/:id              | POST  | Edit the profile for the given user id.                               |
