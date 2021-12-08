// material
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.dark,
  backgroundColor: theme.palette.grey,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderImage: `linear-gradient(
      to right,
      red,
      purple
    ) 1 1`
}));

// ----------------------------------------------------------------------

const TOTAL = 30;

export default function AppIncomingOrders() {
  return (
    <RootStyle>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Incoming Orders
      </Typography>
    </RootStyle>
  );
}
