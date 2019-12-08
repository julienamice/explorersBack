var express = require("express");

console.log("> Starting server...");
var app = express();

var usersRouter = require("./routes/users");
var trailsRouter = require("./routes/trails");
var enigmasRouter = require("./routes/enigmas");

console.log("> Router injection...");
app.use("/users", usersRouter);
app.use("/trails", trailsRouter);
app.use("/enigmas", enigmasRouter);

console.log("> Start listenning...");
var port = 3001;
app.listen(port);
console.log("> Listening to port " + port);
console.log("> http://localhost:" + port + "/");
