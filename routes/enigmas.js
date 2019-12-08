var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json([]);
});

// STEP

module.exports = router;
