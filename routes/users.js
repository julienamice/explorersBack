var express = require("express");
var bdd = require("../models/bdd");
const fs = require('fs');
const path = require('path');
var router = express.Router();
var userModel = require('../models/users.model')
var uid2 = require('uid2')
var SHA256 = require('crypto-js/sha256');
var encBase64 = require("crypto-js/enc-base64");


/* GET home page. */
router.get('/signup', async function (req, res, next) {

  let emailFF = req.query.email
  let passwordFF = req.query.password
  let isLogged = false
  let checkUserDB = await userModel.findOne({
    email: emailFF
  })

  if (req.query.email == "" || req.query.password == "") {
    console.log('User doesnt signup')
    res.render('login');
  }

  if (checkUserDB) {
    // console.log('UserExist')
    // let hash = SHA256(passwordFF + checkUserDB.salt).toString(encBase64)

    // if (hash === checkUserDB.password) {
    //   let newToken = uid2(32)
    //   let updateToken = await userModel.updateOne({ email: emailFF }, { token: newToken })
    //   isLogged = true
    //   console.log(isLogged + '   ' + newToken)
    //   res.json({ isLogged, userToken: newToken, id: checkUserDB.id, user: checkUserDB });
    // } else {

    //   isLogged = false
    //   res.json({ isLogged, userToken: 'Pas Login' });
    // }

    res.json({ result: false, errorMsg: 'already exist' });

  } else {
    console.log('UserNoExist')
    let salt = uid2(32)
    let newToken = uid2(32)
    let newUser = new userModel({
      email: emailFF,
      password: SHA256(passwordFF + salt).toString(encBase64),
      token: newToken,
      salt: salt
    })

    let userSave = await newUser.save()
    isLogged = true
    console.log(userSave)
    res.json({ result: true, userSave });

  }

});


router.get('/signin', async function (req, res, next) {

  let emailFF = req.query.email
  let passwordFF = req.query.password
  let isLogged = false
  let checkUserDB = await userModel.findOne({
    email: emailFF
  })

  console.log(checkUserDB);
  if (req.query.email == "" || req.query.password == "") {
    console.log('User doesnt signup')
    isLogged = false;
    res.json({ isLogged });
  }

  if (checkUserDB) {
    let hash = SHA256(passwordFF + checkUserDB.salt).toString(encBase64)
    if (hash === checkUserDB.password) {
      res.json({ result: true, user: checkUserDB });
    } else {
      res.json({ result: false, errorMsg: 'email or password not valid' });
    }

  } else {
    res.json({ result: false, errorMsg: 'email not exist' });
  }

});

router.delete("/:_id", async function (req, res, next) {
  console.log("CA DEVRAIT PASSER LA !!!", req.params);
  userModel.deleteOne({ _id: req.params._id }, function (err, user) {
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

module.exports = router;
