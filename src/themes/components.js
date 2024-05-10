/* eslint-disable perfectionist/sort-objects */
import { color, constants } from './../constants/index';

const components = (mode) => {
  if (mode === constants.mode.DARK) {
    return {
      MuiTypography: {
        defaultProps: {
          color: color.WHITE,
        },
      },
    };
  }
};

export default components;
