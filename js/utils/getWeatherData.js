export default async function getWeatherData(
  queryType,
  cityName,
  { latitude, longitude }
) {
  const apiKey = '492d320005ae2762ded5b985e60ad0ae';

  const query =
    queryType === 'byCoordinates'
      ? `lat=${latitude}&lon=${longitude}`
      : `q=${cityName}`;

  const api = `http://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`;

  const requestConfig = {
    method: 'GET',
    headers: {},
    mode: 'cors',
    cache: 'default'
  };

  try {
    const response = await fetch(api, requestConfig);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
