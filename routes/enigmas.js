var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json([]);
});

// STEP
router.get("/PN", function(req, res, next) {
  var mockEnigme = [
    {
      // step_1: {
      instruction:
        "Quel est le numéro du François sacré Roi dans la Cathédrale de Reims ?",
      // content: "Object",
      solution: "1"
      // }
    },
    {
      // step_2: {
      instruction:
        "Quel Henri possède sa statue au pied du pont ? Multipliez le résultat par 2.",
      // content: "Object",
      solution: "8"
      // }
    },
    {
      // step_3: {
      instruction:
        "Combien y a-t-il de lampadaires sur le pont ? Divisez le résultat par 2. Puis retirez 1.",
      // content: "Object",
      solution: "9"
      // }
    },
    {
      // step_4: {
      instruction:
        "Combien de bras (i.e.: un bras est une partie d'un fleuve) possède la Seine ? Multipliez le résultat par 2.",
      // content: "Object",
      solution: "4"
    }
    // }
  ];
  res.json(mockEnigme);
});

module.exports = router;
