import { DAY, MERIDIEM, ZERO } from './constants/index';

export const cleanObject = (obj) => {
  return Object.entries(obj)
    .filter(([_, value]) => value != null)
    .reduce((filteredObj, currentValue) => {
      filteredObj[currentValue[0]] = currentValue[1];
      return filteredObj;
    }, {});
};

export const formatMeridian = (date) => {
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
};

const extractForecastTimings = (forecasts, currentEpochTime) => {
  const dayWeather = forecasts.hour ?? [];
  const todayForecastsIndex = currentEpochTime
    ? dayWeather.findIndex(
        (hourWeather) => hourWeather?.time_epoch > currentEpochTime
      )
    : 0;
  return dayWeather
    .slice(todayForecastsIndex === -1 ? dayWeather.length : todayForecastsIndex)
    .map((forecast) => ({
      icon: forecast?.condition?.icon,
      temperature: forecast?.feelslike_c,
      time: forecast?.time,
      timeMeridiem: formatMeridian(new Date(forecast?.time_epoch * 1000)),
    }));
};

const parseCurrentDay = (date, index) => {
  switch (index) {
    case 0:
      return DAY.TODAY;
    case 1:
      return DAY.TOMORROW;
    default:
      return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3-$2-$1');
  }
};

export const getForecasts = (forecasts) => {
  const currentEpochTime = Math.ceil(Date.now() / 1000);
  return forecasts.reduce((forecast, currentForecast, index) => {
    forecast[parseCurrentDay(currentForecast.date, index)] =
      extractForecastTimings(
        currentForecast,
        index === 0 ? currentEpochTime : undefined
      );
    return forecast;
  }, {});
};

export class LocationParam {
  get location() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('q');
  }

  set location(_location) {
    if (history.pushState) {
      const url =
        window.location.protocol +
        '//' +
        window.location.host +
        // eslint-disable-next-line spellcheck/spell-checker
        window.location.pathname +
        `?q=${_location.toLowerCase()}`;
      window.history.pushState({ path: url }, '', url);
    }
  }
}
