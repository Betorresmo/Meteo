export default function convertTempUnit(mainData) {
  const temperaturesObject = {
    mainTemp: new Temperature(
      mainData.temp,
      '#temperatureValue',
      '#temperatureUnit'
    ),
    minTemp: new Temperature(
      mainData.temp_min,
      '#temperatureMinValue',
      '#temperatureMinUnit'
    ),
    maxTemp: new Temperature(
      mainData.temp_max,
      '#temperatureMaxValue',
      '#temperatureMaxUnit'
    ),
    feelsLike: new Temperature(
      mainData.feels_like,
      '#temperatureFeelsValue',
      '#temperatureFeelsUnit'
    ),
  };
  for (const temperatureKey in temperaturesObject) {
    const tempObject = temperaturesObject[temperatureKey];
    const tempUnitSpan = document.querySelector(tempObject.domUnitElement);
    const tempValueSpan = document.querySelector(tempObject.domValueElement);

    if (tempUnitSpan.textContent === 'ºC') {
      tempValueSpan.textContent = parseInt(tempObject.tempInFarenheit);
      tempUnitSpan.textContent = 'ºF';
    } else {
      tempValueSpan.textContent = parseInt(tempObject.tempInCelcius);
      tempUnitSpan.textContent = 'ºC';
    }
  }
}
class Temperature {
  constructor(tempInCelcius, domValueIdentifier, domUnitIdentifier) {
    this.tempInCelcius = tempInCelcius;
    this.tempInFarenheit = Math.round((tempInCelcius * 9) / 5 + 32);
    this.domValueElement = domValueIdentifier;
    this.domUnitElement = domUnitIdentifier;
  }
}
