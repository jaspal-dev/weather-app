import axios from 'axios';

import { WeatherAPI } from './../../constants';

const getWeatherInfo = ({ cityName }) => {
  return axios.get('https://api.weatherapi.com/v1/forecast.json', {
    params: {
      alerts: WeatherAPI.ALERTS,
      // eslint-disable-next-line spellcheck/spell-checker
      aqi: WeatherAPI.AQI,
      days: WeatherAPI.WEATHER_PREDICATION_DAYS,
      key: process.env.WEATHER_API_KEY,
      q: cityName,
    },
  });
};

export { getWeatherInfo };
