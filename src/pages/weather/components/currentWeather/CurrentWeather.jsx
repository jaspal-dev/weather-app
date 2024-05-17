import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CurrentWeather = ({ response }) => {
  const currentTemperature = response?.data?.current?.feelslike_c;
  const weatherCondition = response?.data?.current?.condition;
  return (
    <Stack
      alignItems={'center'}
      height={{ lg: 300, xl: 500 }}
      justifyContent={'center'}
    >
      <Box textAlign={'center'}>
        <img
          height={128}
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
    </Stack>
  );
};

CurrentWeather.propTypes = {
  response: PropTypes.object,
};

export { CurrentWeather };
