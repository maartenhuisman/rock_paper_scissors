let playerScore = 0;
let computerScore = 0;

// Game Buttons
const gameButtonContainer = document.querySelector('#gameButtonContainer');

// Rock
const rockButtonContent = document.createElement('button');

rockButtonContent.id = 'btnRock';
rockButtonContent.classList.add('rockButtonContent');
rockButtonContent.textContent = 'Rock';
gameButtonContainer.appendChild(rockButtonContent);

const rock = document.querySelector('#btnRock');

rock.addEventListener('click', () => { round("Rock") });
rock.addEventListener('click', () => { returnPlayerChoice("Rock") });

// Paper
const paperButtonContent = document.createElement('button');

paperButtonContent.id = 'btnPaper';
paperButtonContent.classList.add('paperButtonContent');
paperButtonContent.textContent = 'Paper';
gameButtonContainer.appendChild(paperButtonContent);

const paper = document.querySelector('#btnPaper');

paper.addEventListener('click', () => { round("Paper") });
paper.addEventListener('click', () => { returnPlayerChoice("Paper") });

// Scissors
const scissorsButtonContent = document.createElement('button');

scissorsButtonContent.classList.add('scissorsButtonContent');
scissorsButtonContent.textContent = 'Sciccors';
gameButtonContainer.appendChild(scissorsButtonContent);

const scissors = document.querySelector('#btnScissors');

scissors.addEventListener('click', () => { round("Scissors") })
scissors.addEventListener('click', () => { returnPlayerChoice("Scissors") })

// Player Choice
const playerChoiceContainer = document.querySelector('#playerChoiceContainer');
const playerChoiceContent = document.createElement('div');

playerChoiceContent.classList.add('playerChoiceContent');
playerChoiceContent.textContent = ' ';
playerChoiceContainer.appendChild(playerChoiceContent);

// Computer Choice
const computerChoiceContainer = document.querySelector('#computerChoiceContainer');
const computerChoiceContent = document.createElement('div');

computerChoiceContent.classList.add('computerChoiceContent');
computerChoiceContent.textContent = ' ';
computerChoiceContainer.appendChild(computerChoiceContent);

// Round Result
const resultContainer = document.querySelector('#resultContainer');
const resultContent = document.createElement('div');

resultContent.classList.add('resultContent');
resultContent.textContent = 'No round played yet..';
resultContainer.appendChild(resultContent);

// Running Score
const scoreContainer = document.querySelector('#scoreContainer');
const scoreContent = document.createElement('div');

scoreContent.classList.add('scoreContent');
scoreContent.textContent = 'You: 0 Computer: 0';
scoreContainer.appendChild(scoreContent);

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function roundResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let winState = "draw"
        return winState;
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
        let winState = "win"
        return winState;
    } else {
        let winState = "lose"
        return winState;
    }
}

function updatePlayerScore(playerScore, winState) {
    if (winState === "win") {
        return ++playerScore;
    } else {
        return playerScore;
    }
}

function updateComputerScore(computerScore, winState) {
    if (winState === "lose") {
        return ++computerScore;
    } else {
        return computerScore;
    }
}

function showScore(updatedPlayerScore, updatedComputerScore) {
    return scoreContent.textContent = `You: ${updatedPlayerScore} - Computer: ${updatedComputerScore}`;
}

function round(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = computerPlay();
    playerChoiceContent.textContent = playerChoice;
    computerChoiceContent.textContent = computerSelection;
    let winState = roundResult(playerSelection, computerSelection);
    playerScore = updatePlayerScore(playerScore, winState);
    computerScore = updateComputerScore(computerScore, winState);
    showScore(playerScore, computerScore);
    return resultContent.textContent = winState;
}