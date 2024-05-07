import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import NavItems from './../navItems/index';
import SearchReport from './../searchReport/index';

const MenuBar = ({ invokeWeatherData, searchInfo }) => {
  return (
    <Stack
      alignItems={'center'}
      direction={{ md: 'row', xs: 'column-reverse' }}
      justifyContent={searchInfo.city ? 'space-between' : 'end'}
      rowGap={2}
    >
      {searchInfo.city && (
        <SearchReport
          searchResponse={{
            searchCity: searchInfo.city,
            searchDate: searchInfo.lastUpdatedAt,
          }}
        />
      )}
      <NavItems invokeWeatherData={invokeWeatherData} />
    </Stack>
  );
};

MenuBar.propTypes = {
  invokeWeatherData: PropTypes.func,
  searchInfo: PropTypes.shape({
    city: PropTypes.string,
    lastUpdatedAt: PropTypes.string,
  }),
};

export { MenuBar };
