window.addEventListener('load', () => {
    let lon
    let lat
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimeZone = document.querySelector('.location-timezone')
    let temperatureSection = document.querySelector('.degree-section')
    const temperatureSpan = document.querySelector('.temperature span')

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
                temperatureDegree.textContent = Math.floor(temperature)
                temperatureDescription.textContent = summary
                locationTimeZone.textContent = data.timezone
                setIcons(icon, document.querySelector('.icon'))

                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        const temperatureC = Math.floor(((temperature - 32) * 5) / 9)
                        temperatureDegree.textContent = temperatureC
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = Math.floor(temperature)
                    }
                })
            })
        })
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g, "_").toUpperCase()
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }
})