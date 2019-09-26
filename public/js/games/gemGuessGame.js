// ***********PSUEDOCODE************
//*************Variables*************
var targetNumber = [Math.floor(Math.random() * 101)+ 19];


// **********Score***********
var counter = 0;

var wins = 0;
var losses = 0;


// ******************Stones***************
var thunderStone = Math.floor(Math.random() * 10) + 1;
var fireStone = Math.floor(Math.random() * 10) + 1;
var leafStone = Math.floor(Math.random() * 10) + 1;
var moonStone = Math.floor(Math.random() * 10) + 1;


// *********DOM Manipulations************
$("#targetNumber").text("Goal: " + targetNumber);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#counter").text("Counter: " + counter);



// *************Functions***************
function startGame(){
targetNumber = [Math.floor(Math.random() * 101)+ 19];
$("#targetNumber").text("Goal: " + targetNumber);

counter = 0;

thunderStone = Math.floor(Math.random() * 10) + 1;
fireStone = Math.floor(Math.random() * 10) + 1;
leafStone = Math.floor(Math.random() * 10) + 1;
moonStone = Math.floor(Math.random() * 10) + 1;
}

// ***************** Click Functions ********************
$("#thunder").on("click", function(){
    counter += thunderStone;
    var stoneValue = ($(this).attr("data-stonevalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#fire").on("click", function(){
    counter += fireStone;
    var stoneValue = ($(this).attr("data-stonevalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#leaf").on("click", function(){
    counter += leafStone;
    var stoneValue = ($(this).attr("data-stonevalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#moon").on("click", function(){
    counter += moonStone;
    var stoneValue = ($(this).attr("data-stonevalue"));
    stoneValue = parseInt(stoneValue);
    console.log(counter);
});

$("#stones").on("click", function(){
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