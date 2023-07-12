let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerOptions = ["Rock"];      // , "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playRound("Scissor", getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            const result = document.querySelector('#result');

            const rockRes = document.createElement('div');
            rockRes.classList.add('rockRes');
            rockRes.textContent("It's a tie!");

            result.appendChild(rockRes);






        } else if (computerChoice === 'paper') {
            computerScore++;
            return ("You lost! Paper beats Rock");
        } else {
            playerScore++;
            return ("You win! Rock beats Scissors");
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            playerScore++;
            return ("You win! Rock beats Paper");
        } else if (computerChoice === 'paper') {
            return ("It's a draw!");
        } else {
            computerScore++;
            return ("You lost! Scissors beats Paper");
        }
    } else {
        if (computerChoice === 'rock') {
            computerScore++;
            return ("You lost! Rock beats Scissors");
        } else if (computerChoice === 'paper') {
            playerScore++;
            return ("You win! Scissors beats Paper");
        } else {
            return ("It's a draw!");
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please choose Rock, Paper, or Scissors.");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) console.log("Player WON!!!");
    else console.log("Computer WON!!!");

}