const rock = document.querySelector('#btnRock');
const paper = document.querySelector('#btnPaper');
const scissors = document.querySelector('#btnScissors');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => { game("Rock") })
paper.addEventListener('click', () => { game("Paper") })
scissors.addEventListener('click', () => { game("Scissors") })

const scoreContainer = document.querySelector('#scoreContainer');
const scoreContent = document.createElement('div');

scoreContent.classList.add('scoreContent');
scoreContent.textContent = 'The current score is 0 - 0';
scoreContainer.appendChild(scoreContent);

const resultContainer = document.querySelector('#resultContainer');
const resultContent = document.createElement('div');

resultContent.classList.add('resultContent');
resultContent.textContent = 'Please choose!';
resultContainer.appendChild(resultContent);

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let winState = "draw"
        console.log("Draw!");
        return winState;
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
        let winState = "win"
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return winState;
    } else {
        let winState = "lose"
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
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
    return scoreContent.textContent = `You have ${updatedPlayerScore} points, the computer has ${updatedComputerScore} points`;
}

function game(playerChoice) {
//    for (let i = 0; i < 5; i++) {
//        let string = prompt("Please choose Rock, Paper or Scissors");
    console.log('---------NEW ROUND----------')
    let playerSelection = playerChoice;
    let computerSelection = computerPlay();
    console.log(`The current score is player: ${playerScore}, Computer: ${computerScore}.`);
    console.log(`You chose: ${playerSelection}, the computer chose: ${computerSelection}.`);
    let winState = playRound(playerSelection, computerSelection);
    playerScore = updatePlayerScore(playerScore, winState);
    computerScore = updateComputerScore(computerScore, winState);
    showScore(playerScore, computerScore);
    return resultContent.textContent = winState;
}
//    console.log("Game over man.");
//}
