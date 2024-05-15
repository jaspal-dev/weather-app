export const keysConstants = {
  LOADING_STATUS: 'LOADING_STATUS',
  mode: 'mode',
};

export const constants = {
  [keysConstants.LOADING_STATUS]: {
    FINISHED: 'FINISHED',
    IDLE: 'IDLE',
    LOADING: 'LOADING',
  },
  [keysConstants.mode]: {
    DARK: 'dark',
    LIGHT: 'light',
  },
};

export const LOCATION_NOT_FOUND_ERROR_CODE = 1006;

export const WeatherAPI = {
  ALERTS: 'no',
  AQI: 'no',
  WEATHER_PREDICATION_DAYS: 10,
};

// eslint-disable-next-line spellcheck/spell-checker
export const FULL_VIEWING_HEIGHT = '100vh';

export const LAST_UPDATED_AT_MESSAGE = 'Updated';

export const ZERO = '0';

export const MERIDIEM = {
  AM: 'AM',
  PM: 'PM',
};

export const DAY = {
  TODAY: 'TODAY',
  TOMORROW: 'TOMORROW',
};

export const LOCATION_PARAM = 'q';
