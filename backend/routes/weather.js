import express from 'express';
import { authenticateUser } from '../auth/auth.js';
import Weather from '../models/weather.js';
import { getWeatherForecast } from '../services/weather.js';

const router = express.Router();

// Get weather data for a location
router.get('/:location', authenticateUser, async (req, res) => {
  try {
    const weatherData = await getWeatherForecast(req.params.location);
    const weather = new Weather({
      location: req.params.location,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      windSpeed: weatherData.wind.speed,
      windDirection: weatherData.wind.deg
    });
    await weather.save();

    res.json(weather);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get weather data' });
  }
});

// Get all weather data
router.get('/', authenticateUser, async (req, res) => {
  try {
    const weather = await Weather.find({});
    res.json(weather);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get weather data' });
  }
});

export default router;
