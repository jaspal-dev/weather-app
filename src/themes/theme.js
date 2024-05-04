import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import typography from './typography';

const theme = responsiveFontSizes(createTheme({ typography }));

export { theme };
