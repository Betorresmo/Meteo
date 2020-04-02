import { temperatureInCelcius } from './app.js';

export default function switchTemperatureUnit() {
  const temperatureSpan = document.querySelector(
    '.information-temperature-value'
  );
  const temperatureUnit = document.querySelector(
    '.information-temperature-unit'
  );
  const temperatureInFarenheit = Math.round(
    (temperatureInCelcius * 9) / 5 + 32
  );

  if (temperatureUnit.textContent === 'ºC') {
    temperatureSpan.textContent = parseInt(temperatureInFarenheit);
    temperatureUnit.textContent = 'ºF';
  } else {
    temperatureSpan.textContent = parseInt(temperatureInCelcius);
    temperatureUnit.textContent = 'ºC';
  }
}
