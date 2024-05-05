import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const HelperContent = ({ description, heading }) => {
  return (
    <Stack
      height={150}
      justifyContent={'center'}
      marginY={5}
      textAlign={'center'}
    >
      <Box>
        <Typography variant={'h4'}>{heading}</Typography>
        <Typography variant={'h6'}>{description}</Typography>
      </Box>
    </Stack>
  );
};

HelperContent.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export { HelperContent };
