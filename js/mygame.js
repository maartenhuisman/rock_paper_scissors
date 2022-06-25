console.log("Hello player!");
console.log("Let's play a round of Rock paper scissors")

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

//  console.log(`The computer chose: ${computerPlay()}`);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let winState = "Draw!";
        return winState
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
        console.log(`computer: ${computerSelection}`);
        let winState = `You won! ${playerSelection} beats ${computerSelection}.`;
        return winState
    } else {
        let winState = `You lost! ${computerSelection} beats ${playerSelection}.`;
        return winState
    }
}
const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(`You chose: ${playerSelection}`);
console.log(`The computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));