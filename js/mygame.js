const rock = document.querySelector('#btnRock');
const paper = document.querySelector('#btnPaper');
const scissors = document.querySelector('#btnScissors');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => { round("Rock") })
paper.addEventListener('click', () => { round("Paper") })
scissors.addEventListener('click', () => { round("Scissors") })

rock.addEventListener('click', () => { returnPlayerChoice("Rock") })
paper.addEventListener('click', () => { returnPlayerChoice("Paper") })
scissors.addEventListener('click', () => { returnPlayerChoice("Scissors") })

const playerChoiceContainer = document.querySelector('#playerChoiceContainer');
const playerChoiceContent = document.createElement('div');

playerChoiceContent.classList.add('playerChoiceContent');
playerChoiceContent.textContent = ' ';
playerChoiceContainer.appendChild(playerChoiceContent);

const computerChoiceContainer = document.querySelector('#computerChoiceContainer');
const computerChoiceContent = document.createElement('div');

computerChoiceContent.classList.add('computerChoiceContent');
computerChoiceContent.textContent = ' ';
computerChoiceContainer.appendChild(computerChoiceContent);

const resultContainer = document.querySelector('#resultContainer');
const resultContent = document.createElement('div');

resultContent.classList.add('resultContent');
resultContent.textContent = 'No round played yet..';
resultContainer.appendChild(resultContent);

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