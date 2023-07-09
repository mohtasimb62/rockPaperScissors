let playerScore = 0;
            let computerScore = 0;

            function getComputerChoice() {
                const computerOptions = ["Rock", "Paper", "Scissors"];
                return computerOptions[Math.floor(Math.random()*computerOptions.length)];
            }

            function playRound(playerSelection, computerSelection) {
                if (playerSelection === "Rock") {
                    if (computerSelection === "Rock") {
                        return ("It's a draw!");
                    } else if (computerSelection === "Paper") {
                        computerScore++;
                        return ("You lost! Paper beats Rock");
                    } else {
                        playerScore++;
                        return ("You win! Rock beats Scissors");
                    }
                } else if (playerSelection === "Paper") {
                    if (computerSelection === "Rock") {
                        playerScore++;
                        return ("You win! Rock beats Paper");
                    } else if (computerSelection === "Paper") {
                        return ("It's a draw!");
                    } else {
                        computerScore++;
                        return ("You lost! Scissors beats Paper");
                    }
                } else {
                    if (computerSelection === "Rock") {
                        computerScore++;
                        return ("You lost! Rock beats Scissors");
                    } else if (computerSelection === "Paper") {
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