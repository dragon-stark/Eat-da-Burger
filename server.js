var express = require("express");
require('dotenv').config();
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});