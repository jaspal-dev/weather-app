import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

import {
  StyledContainer,
  StyledCurrentWeatherInfo,
  StyledPage,
  StyledSwitch,
  StyledWeatherContent,
} from './Weather.styled';

const Weather = () => {
  return (
    <StyledPage>
      <StyledContainer elevation={5}>
        <Stack
          alignItems={'center'}
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Box>
            <Typography variant={'h2'}>London</Typography>
            <Typography>Friday 16 July 10:28</Typography>
          </Box>
          <Stack alignItems={'center'} direction={'row'}>
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
            <StyledSwitch defaultChecked sx={{ m: 1 }} />
          </Stack>
        </Stack>
        <Stack direction={'row'}>
          <StyledWeatherContent
            alignItems={'center'}
            component={Stack}
            fixedWidth
            justifyContent={'center'}
          >
            <Box textAlign={'center'}>
              <Typography variant={'h1'}>20 C</Typography>
              <Typography>Sunny</Typography>
            </Box>
          </StyledWeatherContent>
          <StyledWeatherContent
            alignItems={'center'}
            flexGrow={1}
            justifyContent={'center'}
            sx={{ border: '2px solid black' }}
          >
            <Box textAlign={'center'}>
              <Typography>Forecast for today</Typography>
              <StyledCurrentWeatherInfo>
                <Grid container>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{ border: '2px solid red', height: '80px' }}
                    ></div>
                  </Grid>
                </Grid>
              </StyledCurrentWeatherInfo>
            </Box>
          </StyledWeatherContent>
        </Stack>
      </StyledContainer>
    </StyledPage>
  );
};

export default Weather;
