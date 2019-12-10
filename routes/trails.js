var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

var mockTrailList = [
  {
    id: 1,
    location: "localisation1",
    parcours: "parcours1",
    rating: 5,
    subtitle: "subtitle1",
    desc: "description1",
    isTeacher: false,
    details:
      "blabla1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  },
  {
    id: 2,
    location: "localisation2",
    parcours: "parcours2",
    rating: 3,
    subtitle: "subtitle2",
    desc: "description2",
    isTeacher: false,
    details:
      "blabla2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
  },
  {
    id: 3,
    location: "localisation3",
    parcours: "parcours3",
    rating: 2,
    subtitle: "subtitle3",
    desc: "description3",
    isTeacher: false,
    details:
      "blabla3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, quam sed euismod placerat, nunc orci viverra nisl, eget aliquet elit libero vel mauris. Vivamus vel enim non ligula ultricies fringilla. Vivamus non eleifend libero, sed lobortis velit."
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
