let lat = document.getElementById("latitude");
let lon = document.getElementById("longitude");
let lang = document.getElementById("language")
let fetchBtn = document.getElementById("fetchBtn");
let para = document.getElementById("result");

fetchBtn.addEventListener("click",async ()=>{
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat.value}%2C${lon.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59c7b872e4mshedfa7127fcf83adp1af87ejsn35e783bb9eac',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try  {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.current.wind_kph);
        const location = result.location.name + " " + result.location.region + " " + result.location.country;
        const wind = result.current.wind_kph;
        const pressure = result.current.pressure_mb;
        const temp = result.current.temp_c;
        const humidity = result.current.humidity;
        const weatherHTML = `
                    <p>Location: ${location}</p>
                    <p>Temperature: ${temp} °C</p>
                    <p>Pressure: ${pressure} mb</p>
                    <p>Humidity: ${humidity} %</p>
                    <p>Wind Speed: ${wind} kph</p>
                `;
        para.innerHTML = weatherHTML;
    } catch (error) {
        console.log(error);
    }
});