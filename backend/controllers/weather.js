const axios = require('axios');
const { WEATHER_API_KEY } = require('../config/env');

async function getWeatherForecast(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = { getWeatherForecast };
