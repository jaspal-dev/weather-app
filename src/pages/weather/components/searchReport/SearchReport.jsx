import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const SearchReport = ({
  isLoading,
  searchResponse: { searchCity, searchDate },
}) => {
  return isLoading ? (
    <Box></Box>
  ) : (
    <Box>
      <Typography fontWeight={500} variant={'h2'}>
        {searchCity}
      </Typography>
      <Typography>{searchDate}</Typography>
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

SearchReport.defaultProps = {
  isLoading: false,
  searchResponse: {
    searchCity: '',
    searchDate: '',
  },
};

export { SearchReport };
