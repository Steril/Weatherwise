import axios from 'axios';
import { WEATHER_API_KEY } from '../config/env';

async function getWeatherForecast(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}

export { getWeatherForecast };
