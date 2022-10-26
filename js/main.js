let playerScore = 0;
let computerScore = 0;

const replayButton = document.querySelector('button');

replayButton.addEventListener('click', (e) => {
  
})

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
};

const playerSelections = document.querySelectorAll('.choiceBox');


playerSelections.forEach(playerSelection => {
  playerSelection.addEventListener('click', (e) => {
    playGame(e);
  }, false)
})

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

function playGame(e) {

  const computerChoice = getComputerChoice();
  let result = ""
  const roundResult = document.querySelector('.round-result');
  const computerResult = document.querySelector('.what-the-computer-chose');
  const compScoreResult = document.querySelector('.computer-score');
  const playerScoreResult = document.querySelector('.player-score');

  if(e.target.classList.contains('box1')) {
      result = playRound('rock', computerChoice);
    }
  if(e.target.classList.contains('box2')) {
      result = playRound('paper', computerChoice);
    }
  if(e.target.classList.contains('box3')) {
      result = playRound('scissors', computerChoice);
    }

  computerResult.classList.remove('hide')
  computerResult.textContent = `The computer chose ${computerChoice}`

  if(result === 'computer') {
      computerScore++;
      roundResult.classList.remove('hide')
      roundResult.textContent = 'The Computer Won This Round!';
    }
  if(result === 'player') {
      playerScore++;
      roundResult.classList.remove('hide')
      roundResult.textContent = 'You Won This Round!';
    }

  if(result === 'tie') {
      roundResult.classList.remove('hide')
      roundResult.textContent = 'You Tied!';
    }

  compScoreResult.textContent = computerScore;
  playerScoreResult.textContent = playerScore;

  if(computerScore === 5) {
    endGame('computer');
  }
  if(playerScore === 5) {
    endGame('player');
  }
}

function endGame(winner) {
  const computerResult = document.querySelector('.what-the-computer-chose');
  const roundResult = document.querySelector('.round-result');
  const userChoices = document.querySelector('.user-choices');
  const results = document.querySelector('.results');


  computerResult.classList.add('hide');
  if(winner === 'player') {
    roundResult.textContent = 'You win! The computer can suck it.'
  } else {
    roundResult.textContent = 'You Lose. The computer beat your ass.'
  }

  userChoices.classList.add('breakIt');

  const replayButton = document.createElement('button');
  replayButton.textContent = "Play Again?";
  results.insertBefore(replayButton, results.children[1])
}

