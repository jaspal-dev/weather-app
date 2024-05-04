import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

import useResponsive from '../../hooks/useResponsive';
import {
  StyledContainer,
  StyledCurrentWeatherInfo,
  StyledPage,
  StyledSwitch,
  StyledWeatherContent,
} from './Weather.styled';
import SearchReport from './components/searchReport';

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
              searchDate: 'Friday 16 July 10:28',
            }}
          />
          <Stack
            alignItems={'center'}
            flexDirection={'row'}
            flexGrow={{ md: 'flex-end', xs: 'space-between' }}
            justifyContent={{ md: 'flex-end', xs: 'space-between' }}
            width={{ md: 'auto', xs: '100%' }}
          >
            <Box display={downSM ? 'none' : 'block'}></Box>
            <Stack alignItems={{ md: 'flex-end', xs: 'center' }} flexGrow={1}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="primary" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                hiddenLabel
                placeholder="Search City"
                size="small"
                variant="outlined"
              />
            </Stack>
            <Stack alignItems={'flex-end'}>
              <StyledSwitch defaultChecked />
            </Stack>
          </Stack>
        </Stack>
        <Grid container gap={3} mt={downSM ? 2 : 3}>
          <Grid item xl={4} xs={12}>
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
