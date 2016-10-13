var
  express = require('express'),
  pathsRouter = express.Router(),
  Path = require('../models/Path.js'),
  User = require('../models/User.js'),
  pathsController = require('../controllers/paths'),
  request = require('request')


// PATH ROUTES =============================

// show all paths
pathsRouter.get('/paths', pathsController.index)
// make a new path
pathsRouter.post('/paths', pathsController.create)
// show a specific path
pathsRouter.get('/paths/:id', pathsController.show)
// delete a specific path
pathsRouter.get('/paths/:id/delete', pathsController.destroy)
// Search paths
pathsRouter.post("/search", pathsController.search)
// Search paths by their blips
pathsRouter.post("/blips/search", pathsController.searchPathByBlips)

pathsRouter.get('/google/:word', function(req, res){
  var api = 'https://www.googleapis.com/customsearch/v1?q='+req.params.word+'&num=9&start=1&imgSize=medium&searchType=image&key='+process.env.GOOGLE_API+'&cx='+process.env.CX

  request.get(api, function(err, googleResponse, googleBody){
    var images = JSON.parse(googleBody).items
    var html ="";
    images.forEach(function(img){
      html += '<img class="photo photoWidth" src="' + img.link + '">'
    })
    res.send(html)
    // res.json(images)
  })
})


// PATH'S BLIPS ROUTES =====================

// show all blips on a specific path
pathsRouter.get('/paths/:id/blips', pathsController.indexBlip)
// make a new blip on a specific path
pathsRouter.post('/paths/:id/blips', pathsController.createBlip)
// show a specific blip on a specific path
pathsRouter.get('/paths/:pathId/blips/:blipId', pathsController.showBlip)
// delete a specific blip on a specific path
pathsRouter.delete('/paths/:pathId/blips/:blipId', pathsController.destroyBlip)
// update a specific blip on a specific path
pathsRouter.patch('/paths/:pathId/blips/:blipId', pathsController.updateBlip)

// =========================================

module.exports = pathsRouter
