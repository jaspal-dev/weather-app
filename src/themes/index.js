import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { theme } from './theme';

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
