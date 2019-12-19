var mongoose = require("mongoose");
var mongo =
  "mongodb+srv://admin:admin@cluster0-mirgi.gcp.mongodb.net/test?retryWrites=true&w=majority";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(mongo, options, error => {
  if (error) {
    console.error(
      `error, failed to connect to the database because --> ${error}`
    );
  } else {
    console.log("Serveur BDD connecté");
  }
});

module.exports = mongoose;
