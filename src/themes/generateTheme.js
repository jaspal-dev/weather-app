import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { cleanObject } from '../utils';
import components from './components';
import palette from './palette';
import typography from './typography';

const generateTheme = (mode) => {
  const theme = createTheme(
    cleanObject({
      components: components(mode),
      palette: palette(mode),
      typography,
    })
  );
  return responsiveFontSizes(theme);
};

export { generateTheme };
