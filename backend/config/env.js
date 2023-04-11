module.exports = {
  PORT: process.env.PORT || 5000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || 'myappdb',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  SENDINBLUE_API_KEY: process.env.SENDINBLUE_API_KEY || 'your_sendinblue_api_key',
  SENDINBLUE_API_SECRET: process.env.SENDINBLUE_API_SECRET || 'your_sendinblue_api_secret',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || 'your_weather_api_key'
};
