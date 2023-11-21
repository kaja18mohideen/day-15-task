const restURL = "https://restcountries.com/v3.1/all";
const apiKEY = "5bb73a19a4ca6f584cc36332727113fb";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

const getWeatherOf = (lat, lon) => {
    alert(`lat ${lat}, lng ${lon}`);
};

fetch(restURL)
    .then((res) => res.json())
    .then((data) => {
        const div = document.querySelector(".countryData");
        div.innerHTML = data
            .map((element) => `
                <div>
                    <img src="${element.flags.svg}" alt="${element.flag}">
                    <h1>${element.flag.svg}</h1>
                    <div>population ${element.population}</div>
                    <button type="button" onclick="getWeatherOf(${element.latlng[0]}, ${element.latlng[1]})">click for weather</button>
                </div>
            `)
            .join(" ");
    });
