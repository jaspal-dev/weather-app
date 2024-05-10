import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

export const StyledContainer = styled(Box)`
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 35px 20px;
    margin: 0;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 35px 20px;
    margin: 0;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 20px 50px;
    margin: 50px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 50px 100px 50px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 50px 140px 50px;
  }
`;

export const StyledPage = styled(Box)`
  background-color: ${({ theme }) => theme.palette.casual.main};
  min-height: 100vh;
  padding: 0.05px;
`;

export const StyledWeatherContent = styled(Stack)`
  min-height: 400px;
`;
