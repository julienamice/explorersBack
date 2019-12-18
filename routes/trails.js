var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

var mockTrailList = [
  {
    id: 1,
    location: "Localisation1",
    parcours: "Parcours1",
    rating: 5,
    subtitle: "Subtitle1",
    desc:
      "description 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit.",
    isTeacher: false,
    details:
      "Notions Programme 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  },
  {
    id: 2,
    location: "Localisation2",
    parcours: "Parcours2",
    rating: 3,
    subtitle: "Subtitle2",
    desc:
      "description 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit.",
    isTeacher: false,
    details:
      "Notions Programme 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  },
  {
    id: 3,
    location: "Localisation3",
    parcours: "Parcours3",
    rating: 2,
    subtitle: "Subtitle3",
    desc:
      "description 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit.",
    isTeacher: false,
    details:
      "Notions Programme 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
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
