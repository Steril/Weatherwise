module.exports = {
  PORT: process.env.PORT || 5000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'myappuser',
  DB_PASSWORD: process.env.DB_PASSWORD || 'myappuserpassword',
  DB_NAME: process.env.DB_NAME || 'myappdb',
  JWT_SECRET: process.env.JWT_SECRET || 'myappsecret',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || 'my_weather_api_key'
};
