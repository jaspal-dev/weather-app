import axios from 'axios';

const getWeatherInfo = ({ cityName }) => {
  return axios.get(
    // eslint-disable-next-line spellcheck/spell-checker
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}&days=${process.env.WEATHER_PREDICATION_DAYS}&aqi=${process.env.AQI}&alerts=${process.env.ALERTS}`
  );
};

export { getWeatherInfo };
