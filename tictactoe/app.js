//html elements
const statusDiv = document.querySelector('.status')
const resetDiv = document.querySelector('.reset')
const cellDivs = document.querySelectorAll('.game-cell')

//variables
let gameIsLive = true;
let xIsNext = true;

//event handlers
const handleReset = (e) => {
}

const handleCellClick = (e) => {
    const classList = e.target.classList
    const location = classList[1]

    if(xIsNext) {
        e.target.classList.add('x')
        xIsNext = !xIsNext;
    }else{
        e.target.classList.add('o')
        xIsNext = !xIsNext;
    }

    if(classList[2] === 'x' || classList[2] === 'o'){
        e.target.classList.add('used')
    }
}

//event listeners
resetDiv.addEventListener('click', handleReset)

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}