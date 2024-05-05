import { Stack } from '@mui/material';
import React from 'react';

import { contents } from './../../contents';
import NavItems from './../navItems/index';
import SearchReport from './../searchReport/index';

const MenuBar = () => {
  return (
    <Stack
      alignItems={'center'}
      direction={{ md: 'row', xs: 'column-reverse' }}
      justifyContent={'space-between'}
      rowGap={2}
    >
      <SearchReport
        searchResponse={{
          searchCity: contents.searchedCity,
          searchDate: contents.searchedDate,
        }}
      />
      <NavItems />
    </Stack>
  );
};

export { MenuBar };
