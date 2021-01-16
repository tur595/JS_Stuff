const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const match = document.querySelector('.match');
        const introScreen = document.querySelector('.intro')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            setTimeout(() => {
                match.classList.remove('fadeOut');
            }, 500);
        })
    }

    const playMatch = () => {
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const options = document.querySelectorAll('.options button');
        const hands = document.querySelectorAll('.hands img');
        const buttons = document.querySelector('.options')

        const computerOptions = ['rock', 'paper', 'scissors'];

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });

        options.forEach(option => {
            option.addEventListener("click", function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                buttons.classList.add('none');
                setTimeout(() => {
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                    compareHands(this.textContent, computerChoice);
                    buttons.classList.remove('none');
                }, 2000);
                
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // const checkScore = () => {
    //     const scoreLimit = document.querySelector('.match-nr');
    //     console.log(scoreLimit.value);
    //     console.log(pScore);
    //     console.log(cScore);
    //     if(pScore === scoreLimit.value || cScore === scoreLimit.value){
    //         winner.textContent = 'Game over.';
    //     }
    // }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }
    playMatch();
    startGame();
};

game();
