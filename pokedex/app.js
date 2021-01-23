const pokeName = document.querySelector('.poke-name')
const mainScreen = document.querySelector('.main-screen')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeight = document.querySelector('.poke-height')

const url = 'https://pokeapi.co/api/v2/pokemon/1'

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(data => {
        console.log(data)
        mainScreen.classList.remove('hide')
        pokeName.textContent = capitalize(data.name)
        pokeTypeOne.textContent = capitalize(data.types[0].type.name)
        pokeTypeTwo.textContent = capitalize(data.types[1].type.name)
        pokeFrontImage.src = data.sprites.front_default
        pokeBackImage.src = data.sprites.back_default
        pokeWeight.textContent = data.weight
        pokeHeight.textContent = data.height
        mainScreen.classList.add(`${data.types[0].type.name}`)
    })