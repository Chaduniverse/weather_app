const inputText = document.querySelector('.inputText');
let button = document.querySelector('.btn')
const showData = document.querySelector('.showData'); 



const ApiKey = '3171471e6c0d948fcc38e2bfad993fdf'

// EventListener for my button
button.addEventListener('click',async ()=> {
    const cityInput = inputText.value; 
    console.log(cityInput)  

// Fetching data from the weather app
    async function getWeather(){
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${ApiKey}`) 
        let data = await response.json()
        console.log(data)

// Creating space for my input text
        inputText.value = " "
        new_temp= [data.main.temp] * 1.8 + 32
        showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${new_temp}ºFarenheit</li>
                                </ul>
                            `  
        
    
    }
getWeather()


})  


