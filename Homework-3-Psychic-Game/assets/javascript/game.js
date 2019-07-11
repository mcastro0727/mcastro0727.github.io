

// Array of alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold the number of wins and losses. Start at 0.
var wins = 0;
var losses = 0;

// Variables to hold the number guesses left and guesses so far.
var guessLeft = 12;
var guessSoFar = [];

// Variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("userguesses-text");

// Function to begin new game.
var newGame = function () {
  guessSoFar = [];
  guessLeft = 12;
  // computerGuess();
}

// Function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


  if ((userGuess === "a" && computerGuess === "a") ||
    (userGuess === "b" && computerGuess === "b") ||
    (userGuess === "c" && computerGuess === "c") ||
    (userGuess === "d" && computerGuess === "d") ||
    (userGuess === "e" && computerGuess === "e") ||
    (userGuess === "f" && computerGuess === "f") ||
    (userGuess === "g" && computerGuess === "g") ||
    (userGuess === "h" && computerGuess === "h") ||
    (userGuess === "i" && computerGuess === "i") ||
    (userGuess === "j" && computerGuess === "j") ||
    (userGuess === "k" && computerGuess === "k") ||
    (userGuess === "l" && computerGuess === "l") ||
    (userGuess === "m" && computerGuess === "m") ||
    (userGuess === "n" && computerGuess === "n") ||
    (userGuess === "o" && computerGuess === "o") ||
    (userGuess === "p" && computerGuess === "p") ||
    (userGuess === "q" && computerGuess === "q") ||
    (userGuess === "r" && computerGuess === "r") ||
    (userGuess === "s" && computerGuess === "s") ||
    (userGuess === "t" && computerGuess === "t") ||
    (userGuess === "u" && computerGuess === "u") ||
    (userGuess === "v" && computerGuess === "v") ||
    (userGuess === "w" && computerGuess === "w") ||
    (userGuess === "x" && computerGuess === "x") ||
    (userGuess === "y" && computerGuess === "y") ||
    (userGuess === "z" && computerGuess === "z")) {
    wins++;
    newGame();
  }

  else if (userGuess != computerGuess) {
    guessSoFar.push(userGuess);
    guessLeft--;
  };

  if (guessLeft === 0) {
    losses++;
    guessLeft = 12;
    newGame();
  }



  // Display the user and computer guesses, and wins/losses/guesses left/guesses so far.
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesleftText.textContent = "Guesses Left: " + guessLeft;
  userGuessesText.textContent = "Your Guesses So Far: " + guessSoFar;
}
