import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledWeatherContent } from './../../Weather.styled';

const CurrentWeather = ({ response }) => {
  const currentTemperature = response?.data?.current?.feelslike_c;
  const weatherCondition = response?.data?.current?.condition;
  return (
    <StyledWeatherContent alignItems={'center'} justifyContent={'center'}>
      <Box textAlign={'center'}>
        <img
          src={
            weatherCondition
              ? weatherCondition?.icon?.replace('64x64', '128x128')
              : undefined
          }
        />
        <Typography variant={'h2'}>
          {currentTemperature ? <>{currentTemperature}&deg;C</> : ''}
        </Typography>
        <Typography variant="h5">{weatherCondition?.text}</Typography>
      </Box>
    </StyledWeatherContent>
  );
};

CurrentWeather.propTypes = {
  response: PropTypes.object,
};

export { CurrentWeather };
