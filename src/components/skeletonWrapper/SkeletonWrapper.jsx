import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const SkeletonWrapper = ({ children, isLoading = false }) => {
  return isLoading ? (
    <Skeleton variant={'rectangular'} width={'100%'}>
      {children}
    </Skeleton>
  ) : (
    children
  );
};

SkeletonWrapper.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export { SkeletonWrapper };
