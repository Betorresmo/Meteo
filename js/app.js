export { temperatureInCelcius };
import setValues from './setValues.js';
import switchTemperatureUnit from './temperatureUnitSwitch.js';
import getWeatherData from './getWeatherData.js';

const temperatureH2 = document.querySelector('.information-temperature');
let temperatureInCelcius;

window.onload = () => {
  navigator.geolocation.getCurrentPosition(async position => {
    const coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    const data = await getWeatherData('coordinates', '', coordinates);
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
};
temperatureH2.addEventListener('click', switchTemperatureUnit);
