var express = require('express');
var router = express.Router();
var bdd = require('../models/bdd')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// GET / Liste parcours

// POST start ==> Check geoloc

// GET intro ==> pour fetch le texte d'intro parcours

// 




module.exports = router;