export default function setValues(temperature, description) {
  const descriptionDiv = document.querySelector('.information-description');
  const temperatureSpan = document.querySelector(
    '.information-temperature-value'
  );

  temperatureSpan.textContent = parseInt(temperature);
  descriptionDiv.textContent = description.toUpperCase();
}
