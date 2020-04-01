import { temperature, temperatureH2 } from './app.js';

export default function switchTemperatureUnit() {
  let temperatureUnit = document.querySelector('.information-temperature-unit');
  const temperatureInCelcius = temperature;
  const temperatureInFarenheit = Math.round(
    (temperatureInCelcius * 9) / 5 + 32
  );

  if (temperatureUnit.textContent === 'ºC') {
    temperatureH2.textContent = temperatureInFarenheit;
    temperatureUnit.textContent = 'ºF';
  } else {
    temperatureH2.textContent = temperatureInCelcius;
    temperatureUnit.textContent = 'ºC';
  }
}
