const pokeName = document.querySelector('.poke-name')
const pokeId = document.querySelector('.poke-id')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeight = document.querySelector('.poke-height')
const mainScreen = document.querySelector('.main-screen')
const pokeList = document.querySelectorAll('.list-item')
const nextButton = document.querySelector('.right-button')
const prevButton = document.querySelector('.left-button')

let prevUrl = null;
let nextUrl = null;

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const resetScreen = () => {
    mainScreen.classList.remove('hide');
    const TYPES = [
        'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
        'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy'
    ];
    for (const type of TYPES) {
        mainScreen.classList.remove(type);
    }
}

const fetchPokeList = url => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const { results, previous, next } = data;
        prevUrl = previous;
        nextUrl = next;
        for (let i = 0; i < pokeList.length; i++){
            const pokeListItem = pokeList[i];
            const resultData = results[i];

            if (resultData) {
                const { name, url } = resultData;
                const urlArray = url.split('/');
                const id = urlArray[urlArray.length - 2];
                pokeListItem.textContent = id + '. ' + capitalize(name);
            }else{
                pokeListItem.textContent = '';
            }
        }
    })
}

const handleNextButtonClick = () => {
    if(nextUrl) {
        fetchPokeList(nextUrl);
    }
}

const handlePrevButtonClick = () => {
    if(prevUrl){
        fetchPokeList(prevUrl);
    }
}

fetch('https://pokeapi.co/api/v2/pokemon/50')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        resetScreen();
        pokeName.innerText = data.name;
        pokeId.innerText = '#' + data.id.toString().padStart(3, '0');
        pokeFrontImage.src = data.sprites.front_default;
        pokeBackImage.src = data.sprites.back_default;
        if(!data.types[1]){
            pokeTypeOne.innerText = capitalize(data.types[0].type.name);
            pokeTypeTwo.innerText = null;
            pokeTypeTwo.classList.add('hide');
        }else{
            pokeTypeOne.innerText = capitalize(data.types[0].type.name);
            pokeTypeTwo.innerText = capitalize(data.types[1].type.name);
        }
        mainScreen.classList.add(`${data.types[0].type.name}`)
        pokeWeight.innerText = data.weight;
        pokeHeight.innerText = data.height;
    });

prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

fetchPokeList('https://pokeapi.co/api/v2/pokemon');