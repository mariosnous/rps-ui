const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const resultScreen = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const getRounds = document.getElementById("rounds");
let Maxrounds = 5;
let playerCount = 0;
let computerCount = 0;

// Initialize scores and rounds
playerScore.textContent = "Player Score: " + playerCount;
computerScore.textContent = "Computer Score: " + computerCount;
getRounds.textContent = "Remaining Rounds: " + Maxrounds;

// Event Listeners
rockButton.addEventListener("click", () => {
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playRound("paper");
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

resetButton.addEventListener("click", () => {
  resetGame();
});

function playRound(playerChoice) {
  const random = Math.floor(Math.random() * 3);
  const computerChoice = choices[random];
  if (playerChoice === computerChoice) {
    displayResult("It's a draw");
    Maxrounds -= 1;
    gameRounds();
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    displayResult(
      `Computer chose ${computerChoice}, Player chose ${playerChoice}. Computer wins!`
    );
    computerCount += 1;
    Maxrounds -= 1;
    gameRounds();
    keepingScore();
  } else {
    displayResult(
      `Player chose ${playerChoice}, Computer chose ${computerChoice}. Player wins!`
    );
    playerCount += 1;
    Maxrounds -= 1;
    gameRounds();
    keepingScore();
  }
}

function displayResult(result) {
  resultScreen.textContent = result;
}

function keepingScore() {
  playerScore.textContent = "Player Score: " + playerCount;
  computerScore.textContent = "Computer Score: " + computerCount;
}

function gameRounds() {
  if (Maxrounds === 0) {
    getRounds.textContent = "Remaining Rounds: " + Maxrounds + " Game Over";
    disabledButtons();
  } else {
    getRounds.textContent = "Remaining Rounds: " + Maxrounds;
  }
}

function disabledButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enabledButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function resetGame() {
  Maxrounds = 5;
  playerCount = 0;
  computerCount = 0;
  resultScreen.textContent = "";
  playerScore.textContent = "Player Score: " + playerCount;
  computerScore.textContent = "Computer Score: " + computerCount;
  getRounds.textContent = "Remaining Rounds: " + Maxrounds;
  enabledButtons();
}
