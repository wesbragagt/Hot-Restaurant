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
function currentTables(){
    for(var i = 0; i<4; i++){
        tables.push(reservations[i]);
    }
};
currentTables();

//Create waitlist info
function currentWait(){
    for(var i = 5; i<reservations.length; i++){
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





//Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });