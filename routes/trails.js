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
    details: "Notions Programme CM1",
    matiere: "Histoire Thème 2 :",
    notions: "-Saint Louis \n-François 1er \n-Henri IV \n-Louis XIV ",
    tag1: "Art",
    tag2: "Sciences",
    tag3: "Maths"
  },
  {
    id: 2,
    location: "Paris",
    img: "monceau",
    parcours: "Paris à travers ses parcs",
    rating: 4,
    subtitle:
      "Le parc Monceau - le parc de Vincennes - le parc des Buttes Chaumont - le parc de Belleville",
    desc: "Parcourez la capitale en découvrant ses illustres parcs.",
    isTeacher: false,
    details: "Notions Programme CM2",
    matiere: "Géographie Thème 2 :",
    notions: "-Saint Louis \n-François 1er \n-Henri IV \n-Louis XIV ",
    tag4: "Géographie",
    tag2: "Sciences",
    mapName: "parc"
  },
  {
    id: 3,
    location: "Paris",
    img: "vincennes",
    parcours: "Les châteaux parisiens",
    rating: 3,
    subtitle:
      "Le château de Vincennes - le château de la Reine Blanche - le château de Fontainebleau - l'ancien château des Ternes",
    desc: "Visitez Paris et son histoire au travers de ces châteaux.",
    isTeacher: true,
    details: "Notions Programme CM1",
    matiere: "Histoire Thème 2 :",
    notions: "-Le temps des Rois -La Révolution -L'Empire",
    tag2: "Sciences",
    tag5: "Histoire des Arts",
    mapName: "chateau"
  },
  {
    id: 4,
    location: "Paris",
    img: "mars",
    parcours: "La Révolution Française",
    rating: 3,
    subtitle:
      "Champ de Mars - la Concorde - les tuileries - la place de la Nation - la place Vendôme",
    desc:
      "Parcourez la Capitale à travers les lieux symboliques de la Révolution Française.",
    isTeacher: true,
    details: "Notions Programme CM2",
    matiere: "Histoire Thème 2 :",
    notions: "-La Marianne -Devise de la France -La Marseillaise",
    tag6: "Enseignement Moral",
    tag2: "Sciences",
    mapName: "revo"
  }
];

// GET / Liste parcours
router.get("/", function(req, res) {
  res.json(mockTrailList);
});

router.get("/:id", function(req, res) {
  // console.log(req.params);

  const trail = mockTrailList.find(
    mockTrail => mockTrail.id === parseInt(req.params.id)
  );
  // console.log(trail);
  res.json(trail);
});
// POST start ==> Check geoloc

// GET intro ==> pour fetch le texte d'intro parcours

//

module.exports = router;
