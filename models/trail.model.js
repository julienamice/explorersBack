var mongoose = require('mongoose');


var trailSchema = mongoose.Schema({
    trailId: Number,
    tags: Array, //thèmes abordés, spécialités du parcours (rea augmentée), difficultée
    details: Object,
    enigma: Array
});

var trailModel = mongoose.model('trails', trailSchema);

module.exports = trailModel