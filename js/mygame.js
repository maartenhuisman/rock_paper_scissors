console.log("Hello player!");
console.log("Let's play a round of Rock paper scissors")

function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

let string = prompt("Please choose Rock, Paper or Scissors");

function capitalize(string) {
  newString = string.toLowerCase()
  uncapitalizedEnd = newString.slice(1)
  capitalLetter = string.charAt(0)
  newString2 = capitalLetter.toUpperCase() + uncapitalizedEnd

  return newString2
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let winState = "Draw!";
        return winState
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
        let winState = `You won! ${playerSelection} beats ${computerSelection}.`;
        return winState
    } else {
        let winState = `You lost! ${computerSelection} beats ${playerSelection}.`;
        return winState
    }
}
const playerSelection = capitalize(string);
const computerSelection = computerPlay();

console.log(`You chose: ${playerSelection}`);
console.log(`The computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));