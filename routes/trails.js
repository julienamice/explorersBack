var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

var trailModel = require('../models/trail.model')


/* GET home page. */
router.get("/", function (req, res, next) {
  var mockTrailList = [
    { id: 1, location: "localisation1", parcours: "parcours1", rating: 5 },
    { id: 2, location: "localisation2", parcours: "parcours2", rating: 3 },
    { id: 3, location: "localisation3", parcours: "parcours3", rating: 2 }
  ];

  res.json(mockTrailList);
});

// GET / Liste parcours

// POST start ==> Check geoloc

router.get("/content", function (req, res, next) {
  console.log('Route Enigma')
  var idEgnima = req.query.id



  res.json({ id: 4, textIntro: 'Lorem Ipsum introduction ' })
})

module.exports = router;
