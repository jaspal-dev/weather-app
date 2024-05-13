import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { extractForecastTimings } from './../../../../utils';
import { StyledWeatherContent } from './../../Weather.styled';
import { StyledGridContent } from './todayForecasts.styled';

const TodayForecasts = ({ response }) => {
  const forecasts = extractForecastTimings(
    // eslint-disable-next-line spellcheck/spell-checker
    response?.data?.forecast?.forecastday
  );
  return (
    <StyledWeatherContent
      alignItems={'center'}
      justifyContent={'center'}
      rowGap={5}
    >
      <Typography variant="h4">Hourly Forecast</Typography>
      <StyledGridContent>
        {forecasts.map((forecast, index) => (
          <Box key={index}>
            <Stack
              alignItems={'center'}
              height={'100%'}
              justifyContent={'space-evenly'}
            >
              <Stack
                alignItems={'center'}
                height={30}
                justifyContent={'center'}
                width={'100%'}
              >
                <img height={64} src={forecast?.icon ?? ''} width={64} />
              </Stack>
              <Box>
                <Typography variant={'h5'}>
                  <>{forecast?.temperature}&deg;C</>
                </Typography>
                <Typography>{forecast?.timeMeridiem}</Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </StyledGridContent>
    </StyledWeatherContent>
  );
};

TodayForecasts.propTypes = {
  response: PropTypes.object.isRequired,
};

export { TodayForecasts };
