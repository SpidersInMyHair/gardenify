## plant\_service

This service provides the following endpoints:

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


