import { Box, Typography } from '@mui/material';
import React from 'react';

import { StyledWeatherContent } from './../../Weather.styled';
import { contents } from './../../contents';
import { StyledCurrentWeatherInfo } from './todayForecasts.styled';

const TodayForecasts = () => {
  return (
    <StyledWeatherContent alignItems={'center'} justifyContent={'center'}>
      <Box textAlign={'center'}>
        <Typography>{contents.forecastOfTheDay}</Typography>
        <StyledCurrentWeatherInfo></StyledCurrentWeatherInfo>
      </Box>
    </StyledWeatherContent>
  );
};

export { TodayForecasts };
