import axios from 'axios';

import { WeatherAPI } from './../../constants';

const getWeatherInfo = ({ cityName }) => {
  return axios.get(
    // eslint-disable-next-line spellcheck/spell-checker
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}&days=${WeatherAPI.WEATHER_PREDICATION_DAYS}&aqi=${WeatherAPI.AQI}&alerts=${WeatherAPI.ALERTS}`
  );
};

export { getWeatherInfo };
