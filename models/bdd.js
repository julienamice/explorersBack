var mongoose = require("mongoose");
var mongo =
  "mongodb+srv://TwiskyA:Mi4cSxM456@cluster0-k8x5q.gcp.mongodb.net/Explorers?retryWrites=true";

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
