export default function setValues(data) {
  const locationName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const minTemperature = data.main.temp_min;
  const maxTemperature = data.main.temp_max;
  const feelslike = data.main.feels_like;
  const windSpeed = data.wind.speed;
  const humidity = data.main.humidity;

  const locationDiv = document.querySelector('.location-name');
  const descriptionDiv = document.querySelector('.information-description');
  const temperatureSpan = document.querySelector('#temperatureValue');
  const minTemperatureSpan = document.querySelector('#temperatureMinValue');
  const maxTemperatureSpan = document.querySelector('#temperatureMaxValue');
  const feelsLikeSpan = document.querySelector('#temperatureFeelsValue');
  const windSpeedSpan = document.querySelector('#windSpeedValue');
  const humiditySpan = document.querySelector('#humidityValue');

  temperatureSpan.textContent = parseInt(temperature);
  descriptionDiv.textContent = weatherDescription.toUpperCase();
  locationDiv.textContent = locationName;
  minTemperatureSpan.textContent = parseInt(minTemperature);
  maxTemperatureSpan.textContent = parseInt(maxTemperature);
  feelsLikeSpan.textContent = parseInt(feelslike);
  windSpeedSpan.textContent = windSpeed;
  humiditySpan.textContent = humidity;
}
