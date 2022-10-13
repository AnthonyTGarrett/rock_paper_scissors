const userChoice = document.querySelectorAll(".choiceBox");

userChoice.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const winner = "player";
  const loser = `computer`;
  const tie = `tie`;

  if (playerSelection == "rock" && computerSelection == "rock") return tie;
  else if (playerSelection == "rock" && computerSelection == "paper")
    return loser;
  else if (playerSelection == "rock" && computerSelection == "scissors")
    return winner;

  if (playerSelection == "paper" && computerSelection == "paper") return tie;
  else if (playerSelection == "paper" && computerSelection == "scissors")
    return loser;
  else if (playerSelection == "paper" && computerSelection == "rock")
    return winner;

  if (playerSelection == "scissors" && computerSelection == "scissors")
    return tie;
  else if (playerSelection == "scissors" && computerSelection == "rock")
    return loser;
  else if (playerSelection == "scissors" && computerSelection == "paper")
    return winner;
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if (result == "player") {
      console.log("You won that round!");
      playerScore++;
    }
    if (result == "computer") {
      console.log("Computer won that round!");
      computerScore++;
    }
    if (result == "tie") {
      console.log("That round was a tie!");
    }
  }

  playerScore > computerScore
    ? console.log("You won the game!")
    : console.log("The computer won the game");
};

// playGame();
