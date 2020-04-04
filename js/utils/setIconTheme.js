import getLocalTime from './getLocalTime.js';

function returnIconName(data, localHour) {
  //Weather Conditions ID Documentation -> https://openweathermap.org/weather-conditions

  const weatherId = data.weather[0].id;
  const isDay = localHour > 6 && localHour <= 18;

  if (weatherId >= 200 && weatherId <= 232) {
    return 'thunderstorm.svg';
  } else if (
    (weatherId >= 701 && weatherId <= 781) ||
    weatherId === 803 ||
    weatherId === 804
  ) {
    return 'cloudy.svg';
  } else if (weatherId >= 300 && weatherId <= 321) {
    return 'rainy-grayCloud.svg';
  } else if (weatherId === 511) {
    return 'rainySnowy-grayCloud.svg';
  } else if (weatherId >= 520 && weatherId <= 531) {
    return 'rainy-grayCloud.svg';
  } else if (weatherId === 800) {
    return isDay ? 'sun.svg' : 'moon.svg';
  } else if (weatherId === 801) {
    return isDay ? 'cloudyDay-whiteCloud.svg' : 'cloudyNight-whiteCloud.svg';
  } else if (weatherId === 802) {
    return isDay ? 'cloudyDay-grayCloud.svg' : 'cloudyNight-grayCloud.svg';
  } else if (weatherId >= 500 && weatherId <= 504) {
    return isDay ? 'rainyDay-grayCloud.svg' : 'rainy-grayCloud.svg';
  } else if (weatherId >= 600 && weatherId <= 622) {
    return isDay ? 'snowyDay-grayCloud.svg' : 'snowy-grayCloud.svg';
  }
}
export default function setIconTheme(data) {
  const utcTimeInMs = data.dt * 1000;
  const localTimezoneInMs = data.timezone * 1000;
  const localTime = getLocalTime(utcTimeInMs, localTimezoneInMs);
  const localHour = localTime.getHours();

  const iconName = returnIconName(data, localHour);
  const body = document.querySelector('body');
  if (localHour > 6 && localHour <= 18) {
    body.classList.replace('nightTheme', 'dayTheme');
  } else {
    body.classList.replace('dayTheme', 'nightTheme');
  }

  const iconDiv = document.querySelector('.icon');
  const newIcon = document.createElement('img');

  newIcon.setAttribute('src', `./images/weather-icons/${iconName}`);
  newIcon.setAttribute('alt', 'weather icon');

  iconDiv.removeChild(iconDiv.firstElementChild);
  iconDiv.appendChild(newIcon);
}
