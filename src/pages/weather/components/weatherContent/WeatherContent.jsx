import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { useResponsive } from '../../../../hooks/index';
import { SkeletonWrapper } from './../../../../components/index';
import { constants } from './../../../../constants';
import { StyledWeatherContent } from './../../Weather.styled';
import CurrentWeather from './../currentWeather/index';
import TodayForecasts from './../todayForecasts/index';

const WeatherContent = ({ callbackFnInfo }) => {
  const { downSM } = useResponsive();
  return (
    <Grid container mt={0} spacing={downSM ? 2 : 3}>
      <Grid item xl={4} xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === callbackFnInfo.status}
        >
          <CurrentWeather response={callbackFnInfo.response} />
        </SkeletonWrapper>
      </Grid>
      <Grid item xl={8} xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === callbackFnInfo.status}
        >
          <TodayForecasts response={callbackFnInfo.response} />
        </SkeletonWrapper>
      </Grid>
      <Grid item xl xs={12}>
        <SkeletonWrapper
          isLoading={constants.LOADING_STATUS.LOADING === callbackFnInfo.status}
        >
          <StyledWeatherContent></StyledWeatherContent>
        </SkeletonWrapper>
      </Grid>
    </Grid>
  );
};

WeatherContent.propTypes = {
  callbackFnInfo: PropTypes.shape({
    error: PropTypes.object,
    response: PropTypes.object,
    status: PropTypes.string,
  }),
};

export { WeatherContent };
