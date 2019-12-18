var mongoose = require("mongoose");
var mongoose = require("./bdd");

var userSchema = mongoose.Schema({
  firstName: String,
  email: String,
  password: String,
  isTeacher: Boolean
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
