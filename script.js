let playerScore = 0;
let computerScore = 0;

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

const result = document.querySelector('#result');
const score = document.querySelector('#score');

const displayScore = document.createElement('div');
displayScore.classList.add('displayScore');
displayScore.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

score.appendChild(displayScore);

function getComputerChoice() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerScore < 5 && computerScore < 5) {
        const playerChoice = playerSelection.toLowerCase();
        const computerChoice = computerSelection.toLowerCase();

        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {    
                const rockRock = document.createElement('div');
                rockRock.classList.add('rockRock');
                rockRock.textContent = "It's a tie!";
    
                result.appendChild(rockRock);
    
            } else if (computerChoice === 'paper') {
                computerScore++;   

                const rockPaper = document.createElement('div');
                rockPaper.classList.add('rockPaper');
                rockPaper.textContent = "You lost! Paper beats Rock";
    
                result.appendChild(rockPaper);
                
            } else {
                playerScore++;    

                const rockScissor = document.createElement('div');
                rockScissor.classList.add('rockScissor');
                rockScissor.textContent = "You win! Rock beats Scissors";
    
                result.appendChild(rockScissor);
            }

        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                playerScore++;

                const paperRock = document.createElement('div');
                paperRock.classList.add('paperRock');
                paperRock.textContent = "You win! Paper beats Rock";
    
                result.appendChild(paperRock);
    
            } else if (computerChoice === 'paper') {    
                const paperPaper = document.createElement('div');
                paperPaper.classList.add('paperPaper');
                paperPaper.textContent = "It's a tie!";
    
                result.appendChild(paperPaper);
    
            } else {
                computerScore++;

                const paperScissor = document.createElement('div');
                paperScissor.classList.add('paperScissor');
                paperScissor.textContent = "You lost! Scissors beats Paper";
    
                result.appendChild(paperScissor);
    
            }

        } else {
            if (computerChoice === 'rock') {
                computerScore++;

                const scissorRock = document.createElement('div');
                scissorRock.classList.add('scissorRock');
                scissorRock.textContent = "You lost! Rock beats Scissors";
    
                result.appendChild(scissorRock);
    
            } else if (computerChoice === 'paper') {
                playerScore++;

                const scissorPaper = document.createElement('div');
                scissorPaper.classList.add('scissorPaper');
                scissorPaper.textContent = "You win! Scissors beats Paper";
    
                result.appendChild(scissorPaper);
    
            } else {    
                const scissorScissor = document.createElement('div');
                scissorScissor.classList.add('scissorScissor');
                scissorScissor.textContent = "It's a tie!";
    
                result.appendChild(scissorScissor);
            }
        }

        displayScore.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

    } else {
        const finalScore = document.createElement('div');
        finalScore.classList.add('finalScore');

        if (playerScore > computerScore) {
            finalScore.textContent = `YOU WIN :)`;
            score.appendChild(finalScore);
        } else {
            finalScore.textContent = `YOU LOSE :(`;
            score.appendChild(finalScore);
        }
    }
}