import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Lottie from 'react-lottie';

import * as loadingAnimation from './../../../../assets/animations/LoadingAnimation.json';
import { constants } from './../../../../constants';
import { contents } from './../../contents';

const { LOADING_STATUS } = constants;

const GenerateHelperContent = ({ isError }) => {
  return isError ? (
    <Box>
      <Typography variant={'h4'}>{contents.errorHeadingText}</Typography>
      <Typography variant={'h6'}>{contents.errorHeadingDescription}</Typography>
    </Box>
  ) : (
    <Box>
      <Typography variant={'h4'}>{contents.startSearching}</Typography>
      <Typography variant={'h6'}>{contents.searchHelp}</Typography>
    </Box>
  );
};

const HelperContent = ({ callbackFnInfo }) => {
  return (
    <Stack
      height={300}
      justifyContent={'center'}
      marginY={5}
      textAlign={'center'}
    >
      {callbackFnInfo.status === LOADING_STATUS.LOADING ? (
        <Box height={300}>
          <Lottie options={{ animationData: loadingAnimation }} />
        </Box>
      ) : (
        <GenerateHelperContent isError={callbackFnInfo.error !== null} />
      )}
    </Stack>
  );
};

GenerateHelperContent.propTypes = {
  isError: PropTypes.bool,
};

HelperContent.propTypes = {
  callbackFnInfo: PropTypes.shape({
    error: PropTypes.object,
    response: PropTypes.object,
    status: PropTypes.string,
  }).isRequired,
};

export { HelperContent };
