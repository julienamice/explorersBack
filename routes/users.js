var express = require("express");
var router = express.Router();
var bdd = require("../models/bdd");
var userModel = require("../models/users.model");

/* GET home page. */
router.get("/:id", function(req, res, next) {
  var userInfos = [
    {
      id: 1,
      name: "Martin",
      lastname: "Dupont",
      email: "mdupont@gmail.com",
      teacher: true
    },
    {
      id: 2,
      name: "Vanessa",
      lastname: "Smith",
      email: "vaness@gmail.com",
      teacher: false
    },
    {
      id: 3,
      name: "Jon",
      lastname: "Doe",
      email: "jondoe@gmail.com",
      teacher: true
    }
  ];

  const user = userInfos.find(user => user.id === parseInt(req.params.id));
  console.log(user);
  res.json(user);
});

// POST inscription
router.get("/signup", async function(req, res, next) {
  console.log("on est dans signup", req.query);
  var newUser = new userModel({
    firstName: req.query.firstName,
    email: req.query.email,
    password: req.query.password,
    isTeacher: req.query.isTeacher
  });

  newUser.save(function(error, user) {
    if (error) {
      console.log("Oups...error ->", error);
    } else {
      console.log("user ->", user);
      console.log("query", req.query);

      res.json(user);
    }
  });

  // // We are checking it there is a user or not
  // if (user) {
  //   console.log("We found a User with this email", user);
  //   res.json({ user });
  // } else {
  //   console.log(
  //     "There is no user with this email ! So we need to add the user"
  //   );
  //   var newUser = new userModel({
  //     first_name: req.body.firstName,
  //     email: req.body.email
  //   });

  //   newUser.save(function(error, user) {
  //     if (error) {
  //       console.log("Oups...error ->", error);
  //     } else {
  //       console.log("Here is our new Liked user ->", user);
  //       console.log("user", req.body);

  //       res.json({ result: true, user });
  //     }
  //   });
  // }
});

// POST connexion
router.get("/signin", function(req, res) {
  //  if (req.body.firstName=== && req.body.password ===) {

  userModel.findOne(
    { firstName: req.query.firstName, password: req.query.password },
    function(err, user) {
      if (user) {
        console.log("dans ma base de donnée --->", user);

        // user.save();
        res.json(user);
      } else {
        console.log(err);
        res.json({ result: false });
      }
    }
  );
});

// DELETE suppression
router.delete("/:_id", async function(req, res, next) {
  console.log("CA DEVRAIT PASSER LA !!!", req.params);
  userModel.deleteOne({ _id: req.params._id }, function(err, user) {
    if (err) {
      console.log("Oups...error ->", err);
      res.json({ result: false });
    } else {
      console.log("notre user à delete", user);
      userModel.find();
      res.json({ result: true });
    }
    console.log("user", req.params._id);
  });
});

// (POST edit )
// (POST menu )

module.exports = router;
