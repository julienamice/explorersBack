var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");

/* GET home page. */
router.get("/:id", function(req, res, next) {
  var userInfos = [
    {
      id: 1,
      name: "name1",
      lastname: "lastname1",
      email: "name1@gmail.com",
      Teacher: true
    },
    {
      id: 2,
      name: "name2",
      lastname: "lastname2",
      email: "name2@gmail.com",
      Teacher: false
    },
    {
      id: 3,
      name: "name3",
      lastname: "lastname3",
      email: "name3@gmail.com",
      Teacher: true
    }
  ];

  const user = userInfos.find(user => user.id === parseInt(req.params.id));
  console.log(user);
  res.json(user);
});

// POST inscription
// POST connexion

// DELETE suppression

// (POST edit )
// (POST menu )

module.exports = router;
