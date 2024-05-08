/* eslint-disable perfectionist/sort-objects */
import { constants } from './../constants';

const palette = (mode) => {
  return {
    mode,
    ...(mode === constants.mode.LIGHT
      ? {
          casual: {
            main: '#FEFAE0',
          },
        }
      : {
          casual: {
            main: '#023047',
          },
        }),
  };
};

export default palette;
