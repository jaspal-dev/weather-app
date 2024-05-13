import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledGridContent = styled(Box)`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 130px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
`;
