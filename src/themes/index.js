import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { constants, keysConstants } from './../constants';
import ThemeContext from './../contexts/ThemeContext';
import { generateTheme } from './generateTheme';

const ThemeProvider = ({ children }) => {
  const previousSelectedMode = localStorage.getItem(keysConstants.mode);
  const [mode, setMode] = useState(
    previousSelectedMode ?? constants.mode.LIGHT
  );
  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      <MuiThemeProvider theme={generateTheme(mode)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
