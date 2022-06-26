console.log("Hello player!");
console.log("Let's play 5 rounds of Rock paper scissors")

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function capitalize(string) {
    newString = string.toLowerCase();
    uncapitalizedEnd = newString.slice(1);
    capitalLetter = string.charAt(0);
    capitalizedString = capitalLetter.toUpperCase() + uncapitalizedEnd;
    return capitalizedString;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let winState = "Draw!";
        return winState;
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
        let winState = `You won! ${playerSelection} beats ${computerSelection}.`;
        return winState;
    } else {
        let winState = `You lost! ${computerSelection} beats ${playerSelection}.`;
        return winState;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let string = prompt("Please choose Rock, Paper or Scissors");
        let playerSelection = capitalize(string);
        let computerSelection = computerPlay();
        console.log(`You chose: ${playerSelection}`);
        console.log(`The computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Game over man.");
}

game();