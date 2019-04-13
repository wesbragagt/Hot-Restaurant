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



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/api/reservations", function (req, res) {
    var newReservation = req.body;
    reservations.push(newReservation);
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/app.js", function (req, res) {
    res.sendFile(path.join(__dirname, "app.js"));
});




//Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});