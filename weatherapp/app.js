window.addEventListener('load', () => {
    let lon
    let lat
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimeZone = document.querySelector('.location-timezone')
    let weatherIcon = document.querySelector('.location p')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude
            lat = position.coords.latitude
            
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${lon}`
            
            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                const {temperature, summary, icon} = data.currently
                const actualTemperature = Math.floor(((temperature - 32) * 5) / 9)
                temperatureDegree.textContent = actualTemperature
                temperatureDescription.textContent = summary
                locationTimeZone.textContent = data.timezone
                weatherIcon.textContent = icon
            })
        })
    }
})