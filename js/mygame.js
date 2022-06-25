console.log("Hello player!");
console.log("Let's play a round of Rock paper scissors")

function computerPlay() {
    const computerOptions = ["rock", "paper", "scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
    
}

console.log(computerPlay())

function