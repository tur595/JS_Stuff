const pokeName = document.querySelector('.poke-name')
const mainScreen = document.querySelector('.main-screen')
const pokeFrontImage = document.querySelector('.poke-front-image')
const pokeBackImage = document.querySelector('.poke-back-image')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector('.poke-type-two')
const pokeWeight = document.querySelector('.poke-weight')
const pokeHeight = document.querySelector('.poke-height')
const pokeListItems = document.querySelectorAll('.list-item')
const nextButton = document.querySelector('.right-button')
const prevButton = document.querySelector('.left-button')

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/1'
const listUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
let nextUrl = null
let prevUrl = null

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const fetchPokeData = id => {

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(data => {
        return data.json()
    })
    .then(data => {
        mainScreen.classList.remove('hide')
        pokeName.textContent = capitalize(data.name)
        pokeTypeOne.textContent = capitalize(data.types[0].type.name)
        if(data.types[1]){
            pokeTypeTwo.classList.remove('hide')
            pokeTypeTwo.textContent = capitalize(data.types[1].type.name)

        }else{
            pokeTypeTwo.classList.add('hide')
            pokeTypeTwo.textContent = ''
        }
        pokeFrontImage.src = data.sprites.front_default || ""
        pokeBackImage.src = data.sprites.back_default || ""
        pokeWeight.textContent = data.weight
        pokeHeight.textContent = data.height
        mainScreen.classList.add(data.types[0].type.name)
    })
}

const fetchPokeList = url => {

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(data => {
        const {results, previous, next} = data
        nextUrl = next
        prevUrl = previous
        for(i = 0; i < data.results.length; i++){
            const pokeListItem = pokeListItems[i]
            const resultData = results[i]
            const {url, name} = resultData
            const urlArray = url.split('/')
            const id = urlArray[urlArray.length - 2]
            pokeListItem.textContent = `${id}.  ${capitalize(name)}`
            }
    })

}
const nextButtonClick = () => {
    if(nextUrl){
        fetchPokeList(nextUrl)
    }
}

const prevButtonClick = () => {
    if(prevUrl){
        fetchPokeList(prevUrl)
    }
}

const listItemClick = (e) => {
    if(!e.target) return
    const listItem = e.target

    if(!listItem.textContent) return

    const id = listItem.textContent.split('.')[0]
    fetchPokeData(id)
}

nextButton.addEventListener('click', nextButtonClick)
prevButton.addEventListener('click', prevButtonClick)

for(const pokeListItem of pokeListItems){
    pokeListItem.addEventListener('click', listItemClick)
}

fetchPokeList(listUrl)