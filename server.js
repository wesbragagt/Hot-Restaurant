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

//Create tables info
function currentTables() {
    for (var i = 0; i < 4; i++) {
        tables.push(reservations[i]);
    }
};
currentTables();

//Create waitlist info
function currentWait() {
    for (var i = 5; i < reservations.length; i++) {
        waitlist.push(reservations[i]);
    }
};
currentWait();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

$( document ).ready(function() {

    $.get("/api/tables/", function (data) {
        if (data) {
            for (i = 0; i < data.length; i++) {
                var person = $("<li>");
                person.text(data.name);
            }
            $("#reserve-name").show();
            $("#reserve-name").text(data.name);
            $("#role").text(data.role);
            $("#age").text(data.age);
            $("#force-points").text(data.forcePoints);
        } else {
            $("#name").text("The force is not strong with this one. Your character was not found.");
            $("#stats").hide();
        }
    });
});




//Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});