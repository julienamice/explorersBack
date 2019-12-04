var express = require('express');
var router = express.Router();
var bdd = require('../models/bdd')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// POST inscription 
// POST connexion 

// DELETE suppression 

// (POST edit )
// (POST menu )




module.exports = router;

