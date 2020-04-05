export default function setValues(data) {
  const { name: locationName } = data;
  const {
    wind: { speed: windSpeed, deg: windDirection },
  } = data;
  const {
    weather: [{ description: weatherDescription }],
  } = data;
  const {
    temp: mainTemperature,
    feels_like: feelsLike,
    temp_min: minTemperature,
    temp_max: maxTemperature,
    humidity,
  } = data.main;

  const domElements = [
    '.location-name',
    '.information-description',
    '#temperatureValue',
    '#temperatureMinValue',
    '#temperatureMaxValue',
    '#temperatureFeelsValue',
    '#windSpeedValue',
    '#humidityValue',
  ];
  const valuesToInsert = [
    locationName,
    weatherDescription.toUpperCase(),
    parseInt(mainTemperature),
    parseInt(minTemperature),
    parseInt(maxTemperature),
    parseInt(feelsLike),
    windSpeed,
    humidity,
  ];
  for (const element of domElements) {
    document.querySelector(element).textContent =
      valuesToInsert[domElements.indexOf(element)];
  }
}
