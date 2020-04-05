export default function setValues(data) {
  const { name: locationName } = data;
  const {
    wind: { speed: windSpeed, deg: windDirection },
  } = data;
  const {
    weather: [{ description: weatherDescription }],
  } = data;
  const {
    temp: temperature,
    feels_like: feelsLike,
    temp_min: minTemperature,
    temp_max: maxTemperature,
    humidity,
  } = data.main;

  const domIdentifier = [
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
    parseInt(temperature),
    parseInt(minTemperature),
    parseInt(maxTemperature),
    parseInt(feelsLike),
    windSpeed,
    humidity,
  ];
  for (const domElement of domIdentifier) {
    document.querySelector(domElement).textContent =
      valuesToInsert[domIdentifier.indexOf(domElement)];
  }
}
