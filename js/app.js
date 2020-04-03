export { temperatureInCelcius };
import { setIcon, setValues, getWeatherData } from './utils/Index.js';
import switchTemperatureUnit from './temperatureUnitSwitch.js';


const temperatureH2 = document.querySelector('.information-temperature');
const searchButton = document.querySelector('.search-button');
let temperatureInCelcius;

window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      const data = await getWeatherData('byCoordinates', '', coordinates);

      temperatureInCelcius = data.main.temp;

      console.log(data);
      setValues(data);
      setIcon(data);
    },
    () => alert('The browser was not able to access your location.')
  );
};

temperatureH2.addEventListener('click', switchTemperatureUnit);

searchButton.addEventListener('click', async () => {
  const cityName = document.querySelector('.search-input').value;
  const data = await getWeatherData('byCityName', encodeURI(cityName), {});

  temperatureInCelcius = data.main.temp;

  console.log(data);
  setValues(data);
  setIcon(data);
});

/* import getLocalTime from './utils/getLocalTime.js';
console.log(getLocalTime(28800 * 1000)); */
