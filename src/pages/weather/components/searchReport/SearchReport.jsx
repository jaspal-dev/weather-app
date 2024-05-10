import { Box, Skeleton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { LAST_UPDATED_AT_MESSAGE } from './../../../../constants';

const SearchReport = ({
  isLoading = false,
  searchResponse: { searchCity = '', searchDate = '' },
}) => {
  return (
    <Box textAlign={{ md: 'left', xs: 'center' }}>
      <Typography variant={'h2'}>
        {isLoading ? <Skeleton width={200} /> : searchCity}
      </Typography>
      <Typography>
        {isLoading ? (
          <Skeleton sx={{ align: 'center', marginX: 'auto' }} width={170} />
        ) : (
          `${LAST_UPDATED_AT_MESSAGE}: ${searchDate}`
        )}
      </Typography>
    </Box>
  );
};

SearchReport.propTypes = {
  isLoading: PropTypes.bool,
  searchResponse: PropTypes.shape({
    searchCity: PropTypes.string,
    searchDate: PropTypes.string,
  }),
};

export { SearchReport };
