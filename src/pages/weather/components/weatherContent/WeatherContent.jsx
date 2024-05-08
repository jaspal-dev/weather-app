import { Grid, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { useResponsive } from '../../../../hooks/index';
import { SkeletonWrapper } from './../../../../components/index';
import { constants } from './../../../../constants';
import { StyledWeatherContent } from './../../Weather.styled';
import CurrentWeather from './../currentWeather/index';
import TodayForecasts from './../todayForecasts/index';

const WeatherContent = ({ status }) => {
  const { downSM } = useResponsive();
  return (
    <Grid container mt={0} spacing={downSM ? 2 : 3}>
      <Grid item xl={4} xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === status}
        >
          <CurrentWeather />
        </SkeletonWrapper>
      </Grid>
      <Grid item xl={8} xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === status}
        >
          <TodayForecasts />
        </SkeletonWrapper>
      </Grid>
      <Grid item xl xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === status}
        >
          <StyledWeatherContent
            component={Paper}
            elevation={5}
          ></StyledWeatherContent>
        </SkeletonWrapper>
      </Grid>
    </Grid>
  );
};

WeatherContent.propTypes = {
  status: PropTypes.oneOf(Object.values(constants.LOADING_STATUS)),
};

export { WeatherContent };
