// GLOBAL VARIABLES
// =================================================================

// chip Variables
var chip = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  black:
  {
    name: "Black",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the chips (between 1 and 12)
  chip.blue.value = getRandom(1, 12);
  chip.red.value = getRandom(1, 12);
  chip.green.value = getRandom(1, 12);
  chip.black.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + chip.blue.value + " | Green: " + chip.green.value + " | Red: " + chip.red.value +
    " | black: " + chip.black.value);
  console.log("-----------------------------------");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").text(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#win-count").text(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the chips
var addValues = function(clickedchip) {

  // Change currentScore
  currentScore += clickedchip.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").text(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
  addValues(chip.blue);
});

$("#red").click(function() {
  addValues(chip.red);
});

$("#green").click(function() {
  addValues(chip.green);
});

$("#black").click(function() {
  addValues(chip.black);
});
