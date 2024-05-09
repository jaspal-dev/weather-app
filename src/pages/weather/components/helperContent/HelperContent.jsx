import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Lottie from 'react-lottie';

import * as loadingAnimation from './../../../../assets/animations/LoadingAnimation.json';
import {
  LOCATION_NOT_FOUND_ERROR_CODE,
  constants,
} from './../../../../constants';
import { contents } from './../../contents';

const { LOADING_STATUS } = constants;

const GenerateHelperContent = ({ error, isError }) => {
  const isLocationNotFound =
    error?.response?.data?.error?.code === LOCATION_NOT_FOUND_ERROR_CODE;
  return isError ? (
    <Box>
      <Typography variant={'h4'}>
        {isLocationNotFound
          ? contents.locationNotFoundText
          : contents.errorHeadingText}
      </Typography>
      <Typography variant={'h6'}>
        {isLocationNotFound
          ? contents.locationNotFoundDescription
          : contents.errorHeadingDescription}
      </Typography>
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
        <GenerateHelperContent
          error={callbackFnInfo.error}
          isError={callbackFnInfo.error !== null}
        />
      )}
    </Stack>
  );
};

GenerateHelperContent.propTypes = {
  error: PropTypes.object,
  isError: PropTypes.bool.isRequired,
};

HelperContent.propTypes = {
  callbackFnInfo: PropTypes.shape({
    error: PropTypes.object,
    response: PropTypes.object,
    status: PropTypes.string,
  }).isRequired,
};

export { HelperContent };
