import { MERIDIEM, ZERO } from './constants/index';

export const cleanObject = (obj) => {
  return Object.entries(obj)
    .filter(([_, value]) => value != null)
    .reduce((filteredObj, currentValue) => {
      filteredObj[currentValue[0]] = currentValue[1];
      return filteredObj;
    }, {});
};

function formatMeridian(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const meridiem = hours >= 12 ? MERIDIEM.PM : MERIDIEM.AM;
  hours = hours % 12;
  hours = hours || 12;
  minutes = minutes < 10 ? ZERO + minutes : minutes;
  return (
    String(hours).padStart(2, ZERO) +
    ':' +
    String(minutes).padStart(2, ZERO) +
    ' ' +
    meridiem
  );
}

export const extractForecastTimings = (forecasts) => {
  const currentEpochTime = Math.ceil(Date.now() / 1000);
  const dayWeather = forecasts?.[0].hour ?? [];
  const todayForecastsIndex = dayWeather.findIndex(
    (hourWeather) => hourWeather?.time_epoch > currentEpochTime
  );
  return dayWeather
    .slice(todayForecastsIndex === -1 ? dayWeather.length : todayForecastsIndex)
    .map((forecast) => ({
      icon: forecast?.condition?.icon,
      temperature: forecast?.feelslike_c,
      time: forecast?.time,
      timeMeridiem: formatMeridian(new Date(forecast?.time_epoch * 1000)),
    }));
};
