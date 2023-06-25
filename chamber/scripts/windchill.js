// Week 10 update to use an API

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed   = document.querySelector('#wspeed');
const windChill   = document.querySelector('#wchill');
const cityName    = document.querySelector('#city')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=2.4418&lon=-76.6064&units=metric&APPID=304bd79805455271dee8a32fb547d4ed';


function windChillCalc(temp, wspeed) {

    let gradesF = (temp * 9 / 5) + 32;
    let windchill = 0;
    wspeed = wspeed / 1.609;

    //  document.querySelector('#wspeed2').innerHTML = wspeed.toFixed(3);

    // tempF.innerHTML = `<strong>${gradesF.toFixed(0)}</strong>`;

    if (gradesF <= 50 && wspeed > 3){ 
        windchill = 35.74 + (.6215 * gradesF) - (35.75 * (wspeed ** .16)) + (.4275 * gradesF * (wspeed ** .16));
        //document.getElementById("wchill").innerHTML = Math.round(windchill); //Math.round(windchill)
        windChill.innerHTML = Math.round(windchill);
    }
    else {
        windchill = `<strong>N/A</strong>`;
        windChill.innerHTML = windchill;
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;
    cityName.innerHTML = `${weatherData.name}`;

    windChillCalc(weatherData.main.temp, weatherData.wind.speed);
    
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //weatherIcon.setAttribute('width', '100px');
    captionDesc.textContent = desc;
    captionDesc.style.textTransform = "capitalize";
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

// may 2023

// let gradesC = document.getElementById("temperature").textContent;
// let wspeed = document.getElementById("wspeed").textContent;
// let gradesF = (gradesC * 9 / 5) + 32;
// let windchill = 0;
// wspeed = wspeed / 1.609;

// if (gradesF <= 50 && wspeed > 3){ 
//     windchill = 35.74 + (.6215 * gradesF) - (35.75 * (wspeed ** .16)) + (.4275 * gradesF * (wspeed ** .16));
//     document.getElementById("wchill").innerHTML = Math.round(windchill); //Math.round(windchill)
// }
// else {
//     windchill = "N/A";
//     document.getElementById("wchill").innerHTML = windchill;
// }