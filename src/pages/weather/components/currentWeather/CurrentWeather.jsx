import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { StyledWeatherContent } from './../../Weather.styled';

const CurrentWeather = () => {
  return (
    <StyledWeatherContent
      alignItems={'center'}
      component={Paper}
      elevation={5}
      justifyContent={'center'}
    >
      <Box textAlign={'center'}>
        <Typography variant={'h1'}>20 C</Typography>
        <Typography>Sunny</Typography>
      </Box>
    </StyledWeatherContent>
  );
};

export { CurrentWeather };
