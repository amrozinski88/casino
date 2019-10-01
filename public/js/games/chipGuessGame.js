var User = require("../models");


// ***********PSUEDOCODE************
//*************Variables*************
var targetNumber = [Math.floor(Math.random() * 101)+ 19];


// **********Score***********
var counter = 0;

var wins = 0;
var losses = 0;


// ******************Stones***************
var chipOne = Math.floor(Math.random() * 10) + 1;
var chipTwo = Math.floor(Math.random() * 10) + 1;
var chipThree = Math.floor(Math.random() * 10) + 1;
var chipFour = Math.floor(Math.random() * 10) + 1;


// *********DOM Manipulations************
$("#targetNumber").text("Goal: " + targetNumber);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#counter").text("Counter: " + counter);



// *************Functions***************

function updateCoinsWin(coins) {
    $.ajax({
      method: "PUT",
      url: "/api/User",
      data: coins
    })
      .then(function() {
        window.location.href = User;
      });
  };

// update coins template
function updateCoinsLose(coins) {
    $.ajax({
      method: "PUT",
      url: "/api/User",
      data: coins
    })
      .then(function() {
        window.location.href = User;
      });
  };

function startGame(){
targetNumber = [Math.floor(Math.random() * 101)+ 19];
$("#targetNumber").text("Goal: " + targetNumber);

counter = 0;

var chipOne = Math.floor(Math.random() * 10) + 1;
var chipTwo = Math.floor(Math.random() * 10) + 1;
var chipThree = Math.floor(Math.random() * 10) + 1;
var chipFour = Math.floor(Math.random() * 10) + 1;


}

// ***************** Click Functions ********************
$("#chipOne").on("click", function(){
    counter += chipOne;
    var stoneValue = ($(this).attr("data-chipvalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#chipTwo").on("click", function(){
    counter += chipTwo;
    var stoneValue = ($(this).attr("data-chipvalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#chipThree").on("click", function(){
    counter += chipThree;
    var stoneValue = ($(this).attr("data-chipvalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#chipFour").on("click", function(){
    counter += chipFour;
    var stoneValue = ($(this).attr("data-chipvalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#chips").on("click", function(){
    $("#counter").text("Counter: " + counter);

    // ************************ Wins *******************

    if (counter == targetNumber) {
        alert("You Win!");
        wins++
        $("#wins").text("Wins: " + wins);
        wins = parseInt(wins);
        startGame();
    }
// ***************** Losees ********************

    else if (counter > targetNumber) {
        alert("You lose lol");
        losses++
        $("#losses").text("Losses: " + losses);
        losses = parseInt(losses);
        startGame();
    }
});