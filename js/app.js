export { temperatureInCelcius };
import { setIconTheme, setValues, getWeatherData } from './utils/Index.js';
import { moveScreenTouch, moveScreenWheel } from './moveScreen.js';
import switchTemperatureUnit from './temperatureUnitSwitch.js';

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
      setValues(data);
      setIconTheme(data);
      console.log(data);
      temperatureInCelcius = data.main.temp;
    },
    () => alert('The browser was not able to access your location.')
  );
};
searchButton.addEventListener('click', async () => {
  try {
    const cityName = document.querySelector('.search-input');
    const data = await getWeatherData(
      'byCityName',
      encodeURI(cityName.value),
      {}
    );
    cityName.value = '';

    setValues(data);
    setIconTheme(data);
    temperatureInCelcius = data.main.temp;
  } catch (err) {
    alert('City not found.');
  }
});
const temperatureH2 = document.querySelector('.information-temperature');
temperatureH2.addEventListener('click', switchTemperatureUnit);

window.addEventListener('wheel', moveScreenWheel);

const scrollArrows = document.querySelectorAll('.scroll');
scrollArrows[0].addEventListener('click', moveScreenTouch);
scrollArrows[1].addEventListener('click', moveScreenTouch);
