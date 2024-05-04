import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import { useResponsive } from '../../hooks/index';
import {
  StyledContainer,
  StyledCurrentWeatherInfo,
  StyledPage,
  StyledWeatherContent,
} from './Weather.styled';
import CurrentWeather from './components/currentWeather/index';
import NavItems from './components/navItems/index';
import SearchReport from './components/searchReport/index';

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
              searchCity: 'London',
              searchDate: 'Friday 16 July 10:27',
            }}
          />
          <NavItems />
        </Stack>
        <Grid container mt={0} spacing={downSM ? 2 : 3}>
          <Grid item xl={4} xs={12}>
            <CurrentWeather />
          </Grid>
          <Grid item xl={8} xs={12}>
            <StyledWeatherContent
              alignItems={'center'}
              component={Paper}
              elevation={5}
              justifyContent={'center'}
            >
              <Box textAlign={'center'}>
                <Typography>Forecast for today</Typography>
                <StyledCurrentWeatherInfo></StyledCurrentWeatherInfo>
              </Box>
            </StyledWeatherContent>
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
