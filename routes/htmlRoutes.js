var db = require("../models");
var express = require("express");
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 

module.exports = function(app) {
  app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/login.html"))
  });

  app.get("/index",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/index.html"))
  });


  app.get("/chipGame",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/games/chipGuessGame.html"))
  });
  
  app.get("/wordGame",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/games/hangmanGame.html"))
  });
  
  app.get("/slotsGame",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/games/slots.html"))
  });
  
  app.get("/blackJackGame",function(req,res){
    res.sendFile(path.resolve(__dirname,"../views/games/blackJackGame.html"))
  });
};



