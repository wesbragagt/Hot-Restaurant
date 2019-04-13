//Dependencies
var express = require("express");
var path = require("path");

//Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up ability to parse the data
app.use(express.urlencoded({extended: true}));
app.use(express.json());