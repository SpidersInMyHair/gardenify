import express from 'express';

const app = module.exports = express();
const repo = require('./_database/_repo');
const SERVICE = '/api/plant';

import {
  PlantInstruction,
  PlantItem,
  PlantScientificDetails,
  PlantVariety,
  Comments,
  Ratings,
  Distribution
} from '../../protos/_backend/plant_service/protos/plant_pb';
import {
  CreatePlantRequest,
  CreatePlantResponse,
  GetPlantInstructionsRequest,
  GetPlantInstructionsResponse,
  GetPlantItemsRequest,
  GetPlantItemsResponse,
  GetPlantRequest,
  GetPlantResponse,
  GetPlantsResponse,
  GetPlantScientificDetailsRequest,
  GetPlantScientificDetailsResponse,
  GetPlantsByKeywordRequest,
  GetPlantsByKeywordResponse,
  GetCommentsRequest,
  GetCommentsResponse,
  GetRatingsRequest,
  GetRatingsResponse,
  GetDistributionRequest,
  GetDistributionResponse,
  GetDistributionsResponse,
} from "./_messages";

async function checkSession(id: string, session_key: string) {
  if (!id || !session_key) {
    return false
  }

  try {
    const session = await repo.getSession(id, session_key)
    return session ? true : false
  } catch (err: any) {
    console.log(err);
    return false
  }
}

/* --------------------------- SERVICE ENDPOINTS --------------------------- 
 GET  /plant/:slug                Get the summary of a plant variety given an slug.
 POST /plant/                     Create a new plant variety.
 GET  /plant/items/:slug          Get the items listed for a given plant variety.
 GET  /plant/instructions/:slug   Get the ordered instructions listed for a given plant variety.
 GET  /plant/scientific/:slug     Get the scientific details of the plant variety with the given
                                  slug.
 GET  /plant/search/:keyword      Get the summary of all plants matching the keyword
 GET  /plant/comments/:slug       Get the user comments related to a particular plant (using slug)
 POST /plant/comments/:slug       Post a user's comment about a particular plant
 GET  /plant/distribution/:slug   Get the summary of a distribution given a (distribution) slug.
 GET  /plant/distribution/        Get the list of distributions.
 GET  /plant/distribution/in/:slug Get a list of plants in the distribution
------------------------------------------------------------------------- */

// GET  /plant/distribution
app.get(`${SERVICE}/distribution/`, (req: any, res: GetDistributionsResponse) => {
  let limit = 20;
  let offset = 0;
  if (req.query['limit'] !== '') {
    limit = req.query.limit;
    delete req.query.limit;
  }
  if (req.query['offset'] !== '') {
    offset = req.query.offset;
    delete req.query.offset
  }
  repo.getDistributions(offset, limit, req.query)
    .then((distribution: Array<Distribution>) => {
      res.send(distribution).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/:slug
app.get(`${SERVICE}/:slug`, (req: GetPlantRequest, res: GetPlantResponse) => {
  console.log(req.params.slug)
  repo.getPlant(req.params.slug)
    .then((plantVariety: PlantVariety) => {
      res.send(plantVariety).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant
app.get(`${SERVICE}`, (req: any, res: GetPlantsResponse) => {
  let limit = 20;
  let offset = 0;
  if (req.query['limit'] !== '') {
    limit = req.query.limit;
    delete req.query.limit;
  }
  if (req.query['offset'] !== '') {
    offset = req.query.offset;
    delete req.query.offset
  }
  repo.getPlants(offset, limit, req.query)
    .then((plantVarieties: Array<PlantVariety>) => {
      res.send(plantVarieties).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// POST /plant
app.post(`${SERVICE}`, (req: CreatePlantRequest, res: CreatePlantResponse) => {
  repo.insert( //
    req.body.getGenus(), //
    req.body.getSpecies(), //
    req.body.getDescription() //
  )
    .then(() => res.sendStatus(200))
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/items/:slug
app.get(`${SERVICE}/items/:slug`, (req: GetPlantItemsRequest, res: GetPlantItemsResponse) => {
  repo.getItems(req.params.slug)
    .then((plantItems: Array<Array<PlantItem>>) => {
      if (plantItems.length <= 0) {
        repo.getScientificDetails(req.params.slug)
        .then((plantScientificDetails: PlantScientificDetails) => {
          if (plantScientificDetails) {
            repo.addItems(req.params.slug).then(() => {
              repo.getItems(req.params.slug)
                .then((plantItems: Array<Array<PlantItem>>) => {
                  res.send(plantItems).status(200).end()})
            })
          } else {
            repo.addScientificDetails(req.params.slug)
            .then((resp_final: PlantScientificDetails) => {
              repo.addItems(req.params.slug).then(() => {
                repo.getItems(req.params.slug)
                  .then((plantItems: Array<Array<PlantItem>>) => {
                    res.send(plantItems).status(200).end()})
              })
            });
          }
        })
      } else {
        repo.getItems(req.params.slug)
          .then((plantItems: Array<Array<PlantItem>>) => {
            res.send(plantItems).status(200).end()})
      }
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/instructions/:slug
app.get(`${SERVICE}/instructions/:slug`, (req: GetPlantInstructionsRequest, res: GetPlantInstructionsResponse) => {
  repo.getInstructions(req.params.slug)
    .then((plantInstructions: Array<PlantInstruction>) => {
      res.send(plantInstructions).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//GET /plant/scientific/:slug
app.get(`${SERVICE}/scientific/:slug`, (req: GetPlantScientificDetailsRequest, res: GetPlantScientificDetailsResponse) => {
  repo.getScientificDetails(req.params.slug)
    .then((plantScientificDetails: PlantScientificDetails) => {
      if (plantScientificDetails) {
        res.send(plantScientificDetails).status(200).end();
      } else {
        //repo.getScientificDetails(req.params.slug)
        repo.addScientificDetails(req.params.slug)
          .then((resp_final: PlantScientificDetails) => {
            res.send(resp_final).status(200).end();
          });
      }
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/search/:keyword
app.get(`${SERVICE}/search/:keyword`, (req: GetPlantsByKeywordRequest, res: GetPlantsByKeywordResponse) => {
  repo.getPlantsByKeyword(req.params.keyword)
    .then((plantVarieties: Array<PlantVariety>) => {
      res.send(plantVarieties).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/comment/:slug
app.get(`${SERVICE}/comment/:slug`, (req: GetCommentsRequest, res: GetCommentsResponse) => {
  repo.getComments(req.params.slug)
    .then((comments: Array<Comments>) => {
      res.send(comments).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// POST /plant/comment
app.post(`${SERVICE}/comment`, (req: any, res: any) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.insertComment( //
      req.body.slug, //
      id, //
      req.body.comment_description //
    )
      .then((success) => success ? res.sendStatus(200) : res.sendStatus(500))
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
    })
  
});

// GET  /plant/rating/:slug
app.get(`${SERVICE}/rating/:slug`, (req: GetRatingsRequest, res: GetRatingsResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) repo.getRatings(req.params.slug)
    .then((comments: Array<Ratings>) => {
      res.send(comments).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
    else repo.getRatings(req.params.slug, id)
      .then((rating: any) => res.send(rating).status(200).end())
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });  
    })
});

// POST /plant/rating
app.post(`${SERVICE}/rating`, (req: any, res: any) => {
  if (req.body.rating < 1 || req.body.rating > 5) {
    console.log('Invalid Rating; must be an integer between 1 and 5 inclusive');
    res.sendStatus(500);
    return
  }
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.insertRating(
      id,
      req.body.slug,
      req.body.rating
    ) .then((success) => success ? res.sendStatus(200) : res.sendStatus(500))
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
    })
});

// GET  /plant/distribution/:slug
app.get(`${SERVICE}/distribution/:slug`, (req: GetDistributionRequest, res: GetDistributionResponse) => {
  console.log(req.params.slug)
  repo.getDistribution(req.params.slug)
    .then((distribution: Distribution) => {
      res.send(distribution).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});


// GET  /plant/distribution/plant/:slug
app.get(`${SERVICE}/distribution/plant/:slug`, (req: GetDistributionRequest, res: GetDistributionResponse) => {
  console.log(req.params.slug)
  repo.getDistributionsForPlants(req.params.slug)
    .then((distribution: any) => {
      res.send(distribution).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /plant/distribution/in/:slug
app.get(`${SERVICE}/distribution/in/:slug`, (req: any, res: GetPlantsResponse) => {
  console.log(req.params.slug)
  let limit = 20;
  let offset = 0;
  if (req.query['limit'] !== '') {
    limit = req.query.limit;
    delete req.query.limit;
  }
  if (req.query['offset'] !== '') {
    offset = req.query.offset;
    delete req.query.offset
  }
  repo.getPlantsInDistribution(req.params.slug, offset,limit)
    .then((plants: Array<PlantVariety>) => {
      res.send(plants).status(200).end();
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

