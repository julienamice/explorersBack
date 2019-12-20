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
      instruction:
        "Combien y a-t-il de lampadaires sur le pont ? Divisez le résultat par 2. Puis retirez 1.",
      solution: "9"
    },
    {
      instruction:
        "Combien de bras (i.e.: un bras est une partie d'un fleuve) possède la Seine ? Multipliez le résultat par 2.",
      solution: "4"
    },
    {
      instruction:
        "Quel Henri possède sa statue au pied du pont ? Multipliez le résultat par 2.",
      solution: "8"
    },
    {
      instruction:
        "Quel est le numéro du François sacré Roi dans la Cathédrale de Reims ?",
      solution: "1"
    },
    {
      instruction:
        "A quelle date le plus vieux pont de Paris a-t-il été construit ?",
      solution: "1894",
      isLast: true
    }
    // }
  ];
  res.json(mockEnigme);
});

module.exports = router;
