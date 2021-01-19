const pokeName = document.querySelector('.poke-name')
const pokeId = document.querySelector('.poke-id')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeight = document.querySelector('.poke-height')
const mainScreen = document.querySelector('.main-screen')

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mainScreen.classList.remove('hide');
        pokeName.innerText = data.name;
        pokeId.innerText = data.id;
        pokeFrontImage.src = data.sprites.front_default;
        pokeBackImage.src = data.sprites.back_default;
        if(!data.types[1]){
            pokeTypeOne.innerText = capitalize(data.types[0].type.name);
            pokeTypeTwo.innerText = null;
        }else{
            pokeTypeOne.innerText = capitalize(data.types[0].type.name);
            pokeTypeTwo.innerText = capitalize(data.types[1].type.name);
        }
        mainScreen.classList.add(`${data.types[0].type.name}`)
        pokeWeight.innerText = data.weight;
        pokeHeight.innerText = data.height;
    });