var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

var mockTrailList = [
  {
    id: 1,
    location: "Paris",
    img: "louvre",
    parcours: "La création de Paris",
    rating: 5,
    subtitle:
      "Le musée du Louvre - Le pont-Neuf - La statue d'Henri IV - La maison de Nicolas Flamel",
    desc:
      "Visitez Paris en passant par les momuments qui ont contribués à sa création.",
    isTeacher: true,
    details:
      "Notions Programme : CM1 \n Histoire : Thème 2 \n -Saint Louis \n -François 1er \n -Henri IV \n -Louis XIV \n   +Art   +Sciences   +Maths"
  },
  {
    id: 2,
    location: "Paris",
    img: "monceau",
    parcours: "Paris à travers ses parcs",
    rating: 3,
    subtitle:
      "Le parc Monceau - le parc de Vincennes - le parc des Buttes Chaumont - le parc de Belleville",
    desc: "Parcourez la capitale en découvrant ses illustres parcs.",
    isTeacher: false,
    details:
      "Notions Programme : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  },
  {
    id: 3,
    location: "Paris",
    img: "vincennes",
    parcours: "Les châteaux parisiens",
    rating: 2,
    subtitle:
      "Le château de Vincennes - le château de la Reine Blanche - le château de Fontainebleau - l'ancien château des Ternes",
    desc: "Visitez Paris et son histoire au travers de ces châteaux.",
    isTeacher: true,
    details:
      "Notions Programme : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  }
];

// GET / Liste parcours
router.get("/", function (req, res) {
  res.json(mockTrailList);
});

router.get("/:id", function (req, res) {
  // console.log(req.params);

  const trail = mockTrailList.find(
    mockTrail => mockTrail.id === parseInt(req.params.id)
  );
  // console.log(trail);
  res.json(trail);
});
// POST start ==> Check geoloc

router.get("/content", function (req, res, next) {
  console.log('Route Enigma')
  var idEgnima = req.query.id



  res.json({ id: 4, textIntro: 'Lorem Ipsum introduction ' })
})

module.exports = router;
