import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@mui/material';

const useResponsive = () => {
  const theme = useTheme();
  const aboveOrEqualXS = useMediaQuery(theme.breakpoints.up('xs'));
  const aboveOrEqualSM = useMediaQuery(theme.breakpoints.up('sm'));
  const aboveOrEqualMD = useMediaQuery(theme.breakpoints.up('md'));
  const aboveOrEqualLG = useMediaQuery(theme.breakpoints.up('lg'));
  const aboveOrEqualXL = useMediaQuery(theme.breakpoints.up('xl'));

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const downXL = useMediaQuery(theme.breakpoints.down('xl'));

  return {
    aboveOrEqualLG,
    aboveOrEqualMD,
    aboveOrEqualSM,
    aboveOrEqualXL,
    aboveOrEqualXS,
    downMD,
    downSM,
    downXL,
  };
};

export default useResponsive;
