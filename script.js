'use strict';

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice(){
    return prompt('Rock, Paper or Scissors?'); 
}


function determineWinner(userChoice, computerChoice){
    console.log(userChoice, computerChoice);
    if(userChoice === 'rock' && computerChoice === 'paper'){
        return [-1, 'You Lose! Paper beats Rock'];
    }

    if(userChoice === 'paper' && computerChoice === 'scissors'){
        return [-1, 'You Lose! Scissors beats Paper'];
    }

    if(userChoice === 'scissors' && computerChoice === 'rock'){
        return [-1, 'You Lose! Rock beats Scissors'];
    }

    if(userChoice === 'rock' && computerChoice === 'scissors'){
        return [1, 'You Win! Rock beats Scissors'];
    }

    if(userChoice === 'paper' && computerChoice === 'rock'){
        return [1, 'You Win! Paper beats Rock'];
    }

    if(userChoice === 'scissors' && computerChoice === 'paper'){
        return [1, 'You Win! Scissors beats Paper'];
    }


    return [0, 'It\'s a tie!'];
}


function playGame(){
    try{
        const userInput = getPlayerChoice();
        if(userInput !== null){
            const computerChoice = getComputerChoice();
            const result = determineWinner(userInput, computerChoice);
            console.log(result);
            return result;
            
        }else{
            console.log('You cancelled the game');
        }
    }catch(error){
        console.error(`error ocurred ${error} `);
    }
}

function game(){
    let playerWin = 0, computerWin = 0;
    for(let i = 0; i < 5; i++){
        const result = playGame()[0];
        console.log(result);
        if(result === 1){
            playerWin++;
        }else if(result === -1){
            computerWin++;
        }

        console.log(`Player wins: ${playerWin} and Computer wins: ${computerWin}`);

    }
}

game();