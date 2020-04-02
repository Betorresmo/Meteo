export { temperatureInCelcius };
import setValues from './setValues.js';
import switchTemperatureUnit from './temperatureUnitSwitch.js';
import getWeatherData from './getWeatherData.js';

const temperatureH2 = document.querySelector('.information-temperature');
const searchButton = document.querySelector('.search-button');
let temperatureInCelcius;

window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    async position => {
      const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      const data = await getWeatherData('byCoordinates', '', coordinates);
      const {
        main: { temp }
      } = data;
      const {
        weather: [{ description }]
      } = data;
      temperatureInCelcius = temp;

      console.log(data);
      setValues(temp, description);
    },
    () => console.log('The browser was not able to access your location.')
  );
};

temperatureH2.addEventListener('click', switchTemperatureUnit);

searchButton.addEventListener('click', async () => {
  const cityName = document.querySelector('.search-input').value;
  const data = await getWeatherData('byCityName', encodeURI(cityName), {});
  const {
    main: { temp }
  } = data;
  const {
    weather: [{ description }]
  } = data;
  temperatureInCelcius = temp;

  console.log(data);
  setValues(temp, description);
});
