import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

const generateTheme = (mode) => {
  const theme = createTheme({
    palette: palette(mode),
    typography,
  });
  return responsiveFontSizes(theme);
};

export { generateTheme };
