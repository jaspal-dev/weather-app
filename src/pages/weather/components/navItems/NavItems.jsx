import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { contents } from '../../contents';
import { StyledSwitch } from './NavItems.styled';

const NavItems = ({ invokeWeatherData }) => {
  const [cityName, setCityName] = useState('');
  const fetchWeatherData = () => {
    if (cityName) invokeWeatherData({ cityName });
  };
  return (
    <Stack
      alignItems={'center'}
      flexDirection={'row'}
      flexGrow={{ md: 'flex-end', xs: 'space-between' }}
      justifyContent={{ md: 'flex-end', xs: 'space-between' }}
      width={{ md: 'auto', xs: '100%' }}
    >
      <Box
        display={{ md: 'none', sm: 'flex', xs: 'none' }}
        flexGrow={1}
        width={100}
      ></Box>
      <Stack alignItems={{ md: 'flex-end', xs: 'center' }}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  edge="end"
                  onClick={() => fetchWeatherData({ cityName })}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete="off"
          hiddenLabel
          onChange={(e) => setCityName(e.target.value)}
          placeholder={contents.cityPlaceholder}
          size="small"
          value={cityName}
          variant="outlined"
        />
      </Stack>
      <Stack alignItems={'flex-end'} flexGrow={1} width={100}>
        <StyledSwitch defaultChecked />
      </Stack>
    </Stack>
  );
};

NavItems.propTypes = {
  invokeWeatherData: PropTypes.func,
};

export { NavItems };
