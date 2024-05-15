import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { useResponsive } from '../../../../hooks';

const CurrentWeather = ({ response }) => {
  const currentTemperature = response?.data?.current?.feelslike_c;
  const weatherCondition = response?.data?.current?.condition;
  const { downXL } = useResponsive();
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={downXL ? 150 : 500}
    >
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
    </Stack>
  );
};

CurrentWeather.propTypes = {
  response: PropTypes.object,
};

export { CurrentWeather };
