var validChoice = ["Rock", "Paper", "Scissors"];

var computerChoices = ["Rock", "Paper", "Scissors"];

var wins = 0;
var ties = 0;
var losses = 0;

var compare = function () {
  var userChoice = prompt("Do you choose Rock, Paper or Scissors?");
  if (!userChoice) {
    return;
  }
  if (!validChoice.includes(userChoice)) {
    alert("Please enter a valid choice");
    compare();
  }
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  if (userChoice === computerGuess) {
    alert("It's a tie!");
    ties++;
  } else if (
    (userChoice === "Rock" && computerGuess === "Scissors") ||
    (userChoice === "Paper" && computerGuess === "Rock") ||
    (userChoice === "Scissors" && computerGuess === "Paper")
  ) {
    alert("You win!");
    wins++;
  } else {
    alert("You lose");
    losses++;
  }
  alert(`You have ${wins} wins ${ties} ties ${losses} losses`);
  var plyrContinue = confirm(
    "Press OK to play again or press cancel to end the game"
  );
  if (plyrContinue) {
    compare();
  }
};

compare();
