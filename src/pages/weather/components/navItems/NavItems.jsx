import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';

import { StyledSwitch } from './NavItems.styled';

const NavItems = () => {
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
      <Stack alignItems={'flex-end'} flexGrow={1} width={100}>
        <StyledSwitch defaultChecked />
      </Stack>
    </Stack>
  );
};

export { NavItems };
