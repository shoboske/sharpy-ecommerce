import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Card, Button, CardHeader } from '@mui/material';
// utils
import palette from '../../../theme/palette';
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------
export default function AppSalesReport() {
  return (
    <Card>
      <CardHeader
        title="Sales report"
        disableTypography
        sx={{ backgroundColor: palette.cardHeader, pb: 2 }}
      />

      <Scrollbar sx={{ height: '40vh' }}>
        <Stack spacing={3} sx={{ p: 3, pr: 1, pl: 2 }} />
      </Scrollbar>

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View More
        </Button>
      </Box>
    </Card>
  );
}
