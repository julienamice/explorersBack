var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");
var trailModel = require('../models/trail.model')

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
  console.log('Route / ')
  res.json(mockTrailList);
});

router.get('/allo', function (req, res, next) {
  console.log('test')
  res.json({ title: 'test' })
})

router.get("/content", function (req, res, next) {
  console.log('Route Enigma')
  var idEgnima = req.query.id

  res.json({ id: 4, textIntro: 'Lorem Ipsum introduction ' })
});



router.get("/save", async function (req, res, next) {
  console.log('Louvre')
  var trailLouvre = new trailModel({
    trailId: 1,
    tags: ['Histoire', 'Paris', 'Cité'],
    details: {
      location: { long: 2.2727728, lat: 48.8250032 },
      trail_name: 'Constrution de la ville de Paris',
      img: 'louvre',
      description: "Visitez Paris en passant par les momuments qui ont contribués à sa création.",
      backup_step_in_progress: 0, //id de chaque étape? // barre de progression
      main_concept: "Notions Prog'ramme : CM1 \n Histoire : Thème 2 \n -Saint Louis \n -François 1er \n -Henri IV \n -Louis XIV \n",
      secondary_notions: ['Art', 'Sciences', 'Maths'],
      notation: '4.5',
      estimated_time: '3h'
    },
    enigma: [
      {
        louvre: {
          intro: {
            presentation: "Vous avez choisi de partir enquêter sur la construction de Paris, excellent choix ! Rendez vous sur l'île de la Cité pour lancer le parcours ",
            img: '',
          },
          step1: {
            instruction: "Le palais du Louvre s'est construit au travers des siècles. Vous devez trouver les extensions qui correspondent à la Renaissance, observez les bâtiments pour trouver le symbole très présent qui vous aidera à bien choisir.",
            correction: {
              coffre01: false, coffre02: true, coffre03: false, coffre04: false, coffre05: false, coffre06: true, coffre07: false, coffre08: false, coffre09: false, coffre10: true, coffre11: false, coffre12: false
            },
            raw1: [{ url: '../assets/coffre1.png' }, { url: '../assets/coffre3.png' }, { url: '../assets/coffre4.png' }, { url: '../assets/coffre2.png' }],
            raw2: [{ url: '../assets/coffre3.png' }, { url: '../assets/coffre2.png' }, { url: '../assets/coffre1.png' }, { url: '../assets/coffre4.png' }],
            raw3: [{ url: '../assets/coffre1.png' }, { url: '../assets/coffre3.png' }, { url: '../assets/coffre4.png' }, { url: '../assets/coffre2.png' }],
          },
          step2: {
            titre: "Bravo ! Vous avez tout trouver !",
            instruction: "Maintenant, le roi vous demande de refaire les plans en repositionnant les extensions de Renaissance.. Soyez observateurs, les détails vous aideront !",
            items: [{ url: '../assets/frag1.png' }, { url: '../assets/frag2.png' }, { url: '../assets/frag3.png' }, { url: '../assets/frag4.png' }],
            correction: [{ positionX: 306 * 73.529411 / 100, positionY: 155 * 54.193548 / 100, demiWidth: 14 / 2, demiHeight: 29 / 2 },
            { positionX: 306 * 70.1241830065 / 100, positionY: 155 * 69.664516129 / 100, demiWidth: 11.82 / 2, demiHeight: 32.13 / 2 },
            { positionX: 306 * 2.32679738562 / 100, positionY: 155 * 86.9225806452 / 100, demiWidth: 211 / 2, demiHeight: 15 / 2 },
            { positionX: 306 * 77.8660130719 / 100, positionY: 155 * 68.1096774194 / 100, demiWidth: 21 / 2, demiHeight: 8 / 2 }
            ]
          },
          ending: {
            titre: 'Bravo !',
            conclusion: "Le roi vous remercie de son aide, grâce à vous Paris s'est vu grandir à grande vitesse, la ville rayonnera pour de bon dans le monde entier grâce à vous",
            image: '../assets/crown.png'
          }
        }
      },
      {
        pont_neuf: {
          //step 1 : besoin des 4 questions
          //step 2 : besoin de la question finale de validation
        }
      }
    ]
  })


  await trailLouvre.save(function (error, trail) {
    if (error) {
      console.log("Oups...error ->", error);
    } else {
      console.log("louvre ->", trail);
      res.json({ trail, title: 'coucou' });
    }
  });


})

router.get("/enigma:id", function (req, res) {
  // console.log(req.params);

  const trail = mockTrailList.find(
    mockTrail => mockTrail.id === parseInt(req.params.id)
  );
  // console.log(trail);
  res.json(trail);
});

module.exports = router;
