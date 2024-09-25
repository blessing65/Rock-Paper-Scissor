function game(){
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function playGame(){
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        let playerOption = [rockBtn, paperBtn, scissorsBtn]
        let computerOption = ["rock", "paper", "scissors"]

        playerOption.forEach(option => {
            option.addEventListener("click", function(){
                const movesLeft = document.querySelector('.movesLeft')
                moves++
                movesLeft.innerHTML = `Moves left: ${10 - moves}`;

                const choiseNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOption[choiseNumber];

                winner(this.innerText,computerChoise)

                if(moves == 10){
                    gameOver(playerOption, movesLeft);
                }

            })
        });
    }
    const winner = (player, computer) => {
        const result = document.querySelector(".result")
        const playerScoreBoard = document.querySelector(".p-count")
        const computerScoreBoard = document.querySelector(".c-count")
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            result.textContent = "Tie";
        }else if (player == "rock"){
            if(computer == "paper"){
                result.textContent = "Computer Wins";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player Wins";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if (player == "scissors"){
            if(computer == "rock"){
                result.textContent = "Computer Wins";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player Wins";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if (player == "paper"){
            if(computer == "scissors"){
                result.textContent = "Computer Wins";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player Wins";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOption,movesLeft) => {
        const chooseMove = document.querySelector(".move");
        const result = document.querySelector(".result");
        const reloadBtn = document.querySelector(".reload");

        playerOption.forEach(option => {
            option.style.display = "none";
        })

        chooseMove.innerHTML = "Game Over!!";
        movesLeft.style.display = "none";

        if(playerScore > computerScore){
            result.style.fontSize ="2rem";
            result.innerHTML = "You Won The Game";
            result.style.color = "#308D46";
        }
        else if(computerScore = playerScore){
            result.style.fontSize ="2rem";
            result.innerHTML = "You Lost The Game";
            result.style.color = "red";
        }
        else{
            result.style.fontSize ="2rem";
            result.innerHTML = "Tie";
            result.style.color = "grey";
        }
        reloadBtn.innerHTML = "Restart";
        reloadBtn.style.display = "flex";
        reloadBtn.addEventListener("click" , () => {
            window.location.reload();
        })
    }

    playGame();
}

game();