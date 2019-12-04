var express = require('express');
var router = express.Router();
var bdd = require('../models/bdd')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// STEP 







module.exports = router;