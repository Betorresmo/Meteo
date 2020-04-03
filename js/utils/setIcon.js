function returnIconName(data) {
  //Weather Conditions ID Documentation -> https://openweathermap.org/weather-conditions
  const { dt } = data;
  const {
    weather: [{ id }]
  } = data;
  const currentHour = new Date(dt * 1000).getHours();
  const isDay = currentHour > 6 && currentHour <= 18;

  if (id >= 200 && id <= 232) {
    return 'thunderstorm.svg';
  } else if ((id >= 701 && id <= 781) || id === 803 || id === 804) {
    return 'cloudy.svg';
  } else if (id >= 300 && id <= 321) {
    return 'rainy-grayCloud.svg';
  } else if (id === 511) {
    return 'rainySnowy-grayCloud.svg';
  } else if (id >= 520 && id <= 531) {
    return 'rainy-grayCloud.svg';
  } else if (id === 800) {
    return isDay ? 'sun.svg' : 'moon.svg';
  } else if (id === 801) {
    return isDay ? 'cloudyDay-whiteCloud.svg' : 'cloudyNight-whiteCloud.svg';
  } else if (id === 802) {
    return isDay ? 'cloudyDay-grayCloud.svg' : 'cloudyNight-grayCloud.svg';
  } else if (id >= 500 && id <= 504) {
    return isDay ? 'rainyDay-grayCloud.svg' : 'rainy-grayCloud.svg';
  } else if (id >= 600 && id <= 622) {
    return isDay ? 'snowyDay-grayCloud.svg' : 'snowy-grayCloud.svg';
  }
}
export default function setIcon(data) {
  const iconName = returnIconName(data);

  const iconDiv = document.querySelector('.icon');
  const newIcon = document.createElement('img');

  newIcon.setAttribute('src', `./images/weather-icons/${iconName}`);
  newIcon.setAttribute('alt', 'weather icon');

  iconDiv.removeChild(iconDiv.firstElementChild);
  iconDiv.appendChild(newIcon);
}
