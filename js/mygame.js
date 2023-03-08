console.log("Hello player!");
console.log("Let's play 5 rounds of Rock paper scissors")

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

//function capitalize(string) {
//    newString = string.toLowerCase();
//    uncapitalizedEnd = newString.slice(1);
//    capitalLetter = string.charAt(0);
//    capitalizedString = capitalLetter.toUpperCase() + uncapitalizedEnd;
//    return capitalizedString;
//}

function playerPlay() {
    const rock = document.querySelector('#btnRock');
    const paper = document.querySelector('#btnPaper');
    const scissors = document.querySelector('#btnScissors');
    play = rock.addEventListener('click', function (e) {
        return e.target.innerHTML;
    });
    play = paper.addEventListener('click', function (e) {
        return e.target.innerHTML;
    });
    play = scissors.addEventListener('click', function (e) {
        return e.target.innerHTML;
    });
    return play
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
        console.log(playerScore);
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
    return console.log(`You have ${updatedPlayerScore} points, the computer has ${updatedComputerScore} points`);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
//    for (let i = 0; i < 5; i++) {
//        let string = prompt("Please choose Rock, Paper or Scissors");
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(`The current score is ${playerScore} for the player against ${computerScore} for the computer.`);
        console.log(`You chose: ${playerSelection}`);
        console.log(`The computer chose: ${computerSelection}`);
        let winState = playRound(playerSelection, computerSelection);
        playerScore = updatePlayerScore(playerScore, winState);
        computerScore = updateComputerScore(computerScore, winState);
        let score = showScore(playerScore, computerScore);
        console.log(score);
//    }
    console.log("Game over man.");
}

game();