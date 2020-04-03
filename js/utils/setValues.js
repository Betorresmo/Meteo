export default function setValues(data) {
  const { name } = data;
  const {
    sys: { country }
  } = data;
  const {
    main: { temp }
  } = data;
  const {
    weather: [{ description }]
  } = data;

  const descriptionDiv = document.querySelector('.information-description');
  const temperatureSpan = document.querySelector(
    '.information-temperature-value'
  );
  const locationDiv = document.querySelector('.location-name');
  const locationString = `${name}, ${country}`;

  temperatureSpan.textContent = parseInt(temp);
  descriptionDiv.textContent = description.toUpperCase();
  locationDiv.textContent = locationString;
}
