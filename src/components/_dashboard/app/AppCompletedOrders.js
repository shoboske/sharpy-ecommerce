// import { Icon } from '@iconify/react';
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
  borderRadius: '1',
  borderImage: `linear-gradient(
      to right,
      yellow,
      green
    ) 1 1`
}));

// ----------------------------------------------------------------------

const TOTAL = 20;

export default function AppCompletedOrders() {
  return (
    <RootStyle>
      {/* <IconWrapperStyle>
        <Icon icon={appleFilled} width={24} height={24} />
      </IconWrapperStyle> */}
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Completed Orders
      </Typography>
    </RootStyle>
  );
}
