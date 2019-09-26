var db = require("../models");
var express = require("express");
var path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 

module.exports = function(app) {
  app.get("/gemGame",function(req,res){
    res.sendFile(path.join(__dirname,"gemGuessGame.html"))
  });
  
  app.get("/wordGame",function(req,res){
    res.sendFile(path.join(__dirname,"wordGuessGame.html"))
  });
  
  app.get("/slotsGame",function(req,res){
    res.sendFile(path.join(__dirname,"slotsGame.html"))
  });
  
  app.get("/blackJackGame",function(req,res){
    res.sendFile(path.join(__dirname,"blackJackGame.html"))
  });
};



