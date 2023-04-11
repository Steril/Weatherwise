const axios = require('axios');
const { WEATHER_API_KEY } = require('../config/env');

async function getWeatherForecast(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error(`Error getting weather forecast: ${error.message}`);
  }
}

module.exports = { getWeatherForecast };
