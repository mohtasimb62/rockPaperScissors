let playerScore = 0;
let computerScore = 0;

// querySelector to perform operations after user clicks "rock"
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
});                                                     

// querySelector to perform operations after user clicks "paper"
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});

// querySelector to perform operations after user clicks "scissor"
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playRound("Scissor", getComputerChoice());
});

const result = document.querySelector('#result');

const displayScore = document.createElement('div');
displayScore.classList.add('score');                // "score" is used to display the score of each round and display the final score
result.appendChild(displayScore);

const resultOfRound = document.createElement('div');
resultOfRound.classList.add('result');              // "result" is used to display the outcome of each round
result.appendChild(resultOfRound);

const finalScore = document.createElement('div');
finalScore.classList.add('finalScore');             // "finalScore" is used to show the final result
result.appendChild(finalScore);

function playRound(playerSelection, computerSelection) {

    if (anotherRound()) {
        const playerChoice = playerSelection.toLowerCase();
        const computerChoice = computerSelection.toLowerCase();

        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {    
                resultOfRound.textContent = "It's a tie!";
                updateScore();
            } else if (computerChoice === 'paper') {
                computerScore++;   
                resultOfRound.textContent = "You lost! Paper beats Rock";
                updateScore(); 
            } else {
                playerScore++;    
                resultOfRound.textContent = "You win! Rock beats Scissors";
                updateScore();
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                playerScore++;
                resultOfRound.textContent = "You win! Paper beats Rock";
                updateScore();
            } else if (computerChoice === 'paper') {    
                resultOfRound.textContent = "It's a tie!";
                updateScore();
            } else {
                computerScore++;
                resultOfRound.textContent = "You lost! Scissors beats Paper";
                updateScore();
            }

        } else {
            if (computerChoice === 'rock') {
                computerScore++;
                resultOfRound.textContent = "You lost! Rock beats Scissors";
                updateScore();
            } else if (computerChoice === 'paper') {
                playerScore++;
                resultOfRound.textContent = "You win! Scissors beats Paper";
                updateScore();
            } else {
                resultOfRound.textContent = "It's a tie!";
                updateScore();
            }
        }

    } else {
        if (playerScore > computerScore) {
            finalScore.textContent = `YOU WIN :)`;
        } else {
            finalScore.textContent = `YOU LOSE :(`;
        }
    }
}

// function to get the computer choice
function getComputerChoice() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

// function to display the score
function updateScore() {
    displayScore.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
}

// function to decide whether or not to play another round
function anotherRound() {
    return playerScore < 5 && computerScore < 5;
}