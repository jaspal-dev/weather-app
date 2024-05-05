import { Grid, Paper } from '@mui/material';
import React from 'react';

import { useResponsive } from '../../../../hooks/index';
import { StyledWeatherContent } from './../../Weather.styled';
import CurrentWeather from './../currentWeather/index';
import TodayForecasts from './../todayForecasts/index';

const WeatherContent = () => {
  const { downSM } = useResponsive();
  return (
    <Grid container mt={0} spacing={downSM ? 2 : 3}>
      <Grid item xl={4} xs={12}>
        <CurrentWeather />
      </Grid>
      <Grid item xl={8} xs={12}>
        <TodayForecasts />
      </Grid>
      <Grid item xl xs={12}>
        <StyledWeatherContent
          component={Paper}
          elevation={5}
        ></StyledWeatherContent>
      </Grid>
    </Grid>
  );
};

export { WeatherContent };
