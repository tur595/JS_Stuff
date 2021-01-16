

let pScore = 0;
let cScore = 0;

const playMatch = () => {

    
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const options = document.querySelectorAll('.options button');

    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
        option.addEventListener("click", function() {

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;

            compareHands(this.textContent, computerChoice);
        });
    });

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

}

const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const match = document.querySelector('.match');
    const introScreen = document.querySelector('.intro')

    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.remove('fadeOut');
    })
}

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

playMatch();
startGame();
