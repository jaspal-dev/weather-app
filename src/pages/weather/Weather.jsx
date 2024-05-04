import { Grid, Paper, Stack } from '@mui/material';
import React from 'react';

import { useResponsive } from '../../hooks/index';
import {
  StyledContainer,
  StyledPage,
  StyledWeatherContent,
} from './Weather.styled';
import CurrentWeather from './components/currentWeather/index';
import NavItems from './components/navItems/index';
import SearchReport from './components/searchReport/index';
import TodayForecasts from './components/todayForecasts';
import { contents } from './contents';

const Weather = () => {
  const { downSM } = useResponsive();
  return (
    <StyledPage>
      <StyledContainer elevation={5}>
        <Stack
          alignItems={'center'}
          direction={{ md: 'row', xs: 'column-reverse' }}
          justifyContent={'space-between'}
          rowGap={2}
        >
          <SearchReport
            searchResponse={{
              searchCity: contents.searchedCity,
              searchDate: contents.searchedDate,
            }}
          />
          <NavItems />
        </Stack>
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
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
