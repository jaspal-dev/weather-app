import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { contents } from './../../contents';
import NavItems from './../navItems/index';
import SearchReport from './../searchReport/index';

const MenuBar = ({ city, setCity }) => {
  return (
    <Stack
      alignItems={'center'}
      direction={{ md: 'row', xs: 'column-reverse' }}
      justifyContent={city ? 'space-between' : 'end'}
      rowGap={2}
    >
      {city && (
        <SearchReport
          searchResponse={{
            searchCity: contents.searchedCity,
            searchDate: contents.searchedDate,
          }}
        />
      )}
      <NavItems setCity={setCity} />
    </Stack>
  );
};

MenuBar.propTypes = { city: PropTypes.string, setCity: PropTypes.func };

export { MenuBar };
