function returnWeatherDescription(weather) {
  switch (weather) {
    case 'clearday':
    case 'clearnight':
      return 'Sunny';

    case 'pcloudyday':
    case 'pcloudynight':
      return 'Partly Cloudy';

    case 'mcloudyday':
    case 'mcloudynight':
      return 'Mostly Cloudy';

    case 'cloudyday':
    case 'cloudynight':
      return 'Cloudy';

    case 'humidday':
    case 'humidnight':
      return 'Foggy';

    case 'lightrainday':
    case 'lightrainnight':
      return 'Light rain or showers';

    case 'oshowerday':
    case 'oshowernight':
      return 'Occasional showers';

    case 'ishowerday':
    case 'ishowernight':
      return 'Isolated showers';

    case 'lightsnowday':
    case 'lightsnownight':
      return 'Light or occasional snow';

    case 'rainday':
    case 'rainnight':
      return 'Rain';

    case 'snowday':
    case 'snownight':
      return 'Snow';

    case 'rainsnowday':
    case 'rainsnownight':
      return 'Mixed';

    case 'tsday':
    case 'tsnight':
      return 'Thunderstorm possible';

    case 'tsrainday':
    case 'tsrainnight':
      return 'Thunderstorm';
  }
}
export default function updateWeatherDescription(weather) {
  const description = document.querySelector('.information-description');
  description.textContent = returnWeatherDescription(weather);
}
