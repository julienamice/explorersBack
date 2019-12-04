var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://admin:admin@cluster0-mirgi.gcp.mongodb.net/',
    options, error => {
        if (error) {
            console.error(error);
        } else {
            console.log('Serveur BDD connecté')
        }
    }
);

module.exports = mongoose