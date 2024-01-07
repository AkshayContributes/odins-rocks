'use strict';


let playerChoice;
let computerChoice;

const playerChoiceDiv = document.getElementById('player-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
let playerScore = document.getElementById('player-score-id');
let computerScore = 0;

function makeComputerChoice() {
  const choices = [0x270A, 0x270B, 0x270C];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return String.fromCodePoint(choices[randomIndex]);
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  document.getElementById('computer-curr-score').innerHTML = computerScore;
  document.getElementById('player-curr-score').innerHTML = playerScore;
  const resultBox = document.getElementById('result-container');
  const classListResultBox = resultBox.classList;
  classListResultBox.add('hidden');
  document.getElementById('result-text').innerHTML = '';
}

function showResultBox() {
  const classResultBox = document.getElementById('result-container').classList;
  classResultBox.remove('hidden');

}

function computerWins() {

  console.log(computerScore);
  computerScore++;
  document.getElementById('computer-curr-score').innerHTML = computerScore;
  if (computerScore === 5) {
    showResultBox();
    document.getElementById('result-text').innerHTML = 'Computer Wins';
  }

}

function playerWins() {

  console.log(playerScore);
  playerScore++;
  document.getElementById('player-curr-score').innerHTML = playerScore;
  if (playerScore === 5) {
    showResultBox();
    document.getElementById('result-text').innerHTML = 'Player Wins';
  }

}

function calculateWinner(playerChoice, computerChoice) {
  if (playerChoice === String.fromCodePoint(0x270A) && computerChoice === String.fromCodePoint(0x270B)) {
    computerWins();
  } else if (playerChoice === String.fromCodePoint(0x270A) && computerChoice === String.fromCodePoint(0x270C)) {
    playerWins();
  } else if (playerChoice === String.fromCodePoint(0x270B) && computerChoice === String.fromCodePoint(0x270A)) {
    playerWins();

  } else if (playerChoice === String.fromCodePoint(0x270B) && computerChoice === String.fromCodePoint(0x270C)) {
    computerWins();

  } else if (playerChoice === String.fromCodePoint(0x270C) && computerChoice === String.fromCodePoint(0x270A)) {
    computerWins();

  } else if (playerChoice === String.fromCodePoint(0x270C) && computerChoice === String.fromCodePoint(0x270B)) {
    playerWins();

  }
}


function play(buttonId) {
  return new Promise((resolve, reject) => {
    if (buttonId === 'rock') {
      playerChoice = String.fromCodePoint(0x270A);
    } else if (buttonId === 'paper') {
      playerChoice = String.fromCodePoint(0x270B);
    } else if (buttonId === 'scissors') {
      playerChoice = String.fromCodePoint(0x270C);
    } else {
      reject(new Error('Invalid buttonId'));
    }

    playerChoiceDiv.innerHTML = playerChoice;
    computerChoice = makeComputerChoice();
    computerChoiceDiv.innerHTML = computerChoice;

    calculateWinner(playerChoice, computerChoice);
  });
}




