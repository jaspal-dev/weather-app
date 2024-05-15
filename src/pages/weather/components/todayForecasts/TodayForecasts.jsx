import { TabContext, TabList } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Stack, Tab, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { getForecasts } from './../../../../utils';
import { constants } from './../../constants';
import { StyledGridContent } from './todayForecasts.styled';

const TodayForecasts = ({ response }) => {
  const forecasts = getForecasts(
    // eslint-disable-next-line spellcheck/spell-checker
    response?.data?.forecast?.forecastday ?? []
  );
  const [value, setValue] = React.useState(Object.keys(forecasts)?.[0]);

  const handleChange = (events, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Typography
        color={'primary'}
        marginY={3}
        textAlign={'center'}
        variant={'h4'}
      >
        {constants.FORECASTS}
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            // eslint-disable-next-line spellcheck/spell-checker
            variant={'scrollable'}
          >
            {Object.keys(forecasts).map((forecastDate) => (
              <Tab
                key={forecastDate}
                label={forecastDate}
                value={forecastDate}
              />
            ))}
          </TabList>
        </Box>
        {Object.keys(forecasts).map((forecastDate) => (
          <TabPanel key={forecastDate} value={forecastDate}>
            <StyledGridContent>
              {forecasts[forecastDate].map((forecast, index) => (
                <Box key={index}>
                  <Stack
                    alignItems={'center'}
                    height={'100%'}
                    justifyContent={'space-evenly'}
                    textAlign={'center'}
                  >
                    <Stack
                      alignItems={'center'}
                      height={55}
                      justifyContent={'center'}
                      overflow={'hidden'}
                      width={'100%'}
                    >
                      <img height={54} src={forecast?.icon ?? ''} />
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
          </TabPanel>
        ))}
      </TabContext>
    </Stack>
  );
};

TodayForecasts.propTypes = {
  response: PropTypes.object.isRequired,
};

export { TodayForecasts };
