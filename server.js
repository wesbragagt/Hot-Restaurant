//Dependencies
var express = require("express");
var path = require("path");

//Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up ability to parse the data
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var reservations = [];
var tables = [];
var waitlist = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });