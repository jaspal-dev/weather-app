import axios from 'axios';

const getWeatherInfo = ({ cityName }) => {
  return axios.get(
    // eslint-disable-next-line spellcheck/spell-checker
    `https://api.weatherapi.com/v1/forecast.json?key=918baca4f6e642feb3a171024240405&q=${cityName}&days=10&aqi=no&alerts=no`
  );
};

export { getWeatherInfo };
