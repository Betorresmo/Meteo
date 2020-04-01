export { temperature, temperatureH2 };
import updateWeatherDescription from './updateWeatherDescription.js';
import switchTemperatureUnit from './temperatureUnitSwitch.js';

let latitude;
let longitude;
let temperatureH2 = document.querySelector('.information-temperature-value');
let temperature;

async function getForecast() {
  const currentHour = new Date().getHours();
  const apiResponseIndex = Math.round(currentHour / 3 - 1);

  const api = `http://www.7timer.info/bin/api.pl?lon=${longitude}.17&lat=${latitude}.09&product=civil&output=json`;
  const requestConfig = {
    method: 'GET',
    mode: 'cors'
  };

  try {
    const response = await fetch(api, requestConfig);
    const { dataseries } = await response.json();
    const currentForecast = dataseries[apiResponseIndex];

    updateWeatherDescription(currentForecast.weather);
    temperature = currentForecast.temp2m;
    temperatureH2.textContent = temperature;
  } catch (err) {
    console.log(err);
  }
}

window.onload = async () => {
  navigator.geolocation.getCurrentPosition(position => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
  getForecast();
};

temperatureH2.parentElement.addEventListener('click', switchTemperatureUnit);
