import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const SkeletonWrapper = ({ children, isLoading = false }) => {
  return isLoading ? (
    <Skeleton height={400} variant={'rectangular'} />
  ) : (
    children
  );
};

SkeletonWrapper.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export { SkeletonWrapper };
