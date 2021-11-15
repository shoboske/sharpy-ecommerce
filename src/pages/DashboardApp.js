// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppPendingOrders,
  AppTotalEarnings,
  AppCompletedOrders,
  AppRecentOrders,
  AppIncomingOrders,
  AppRecentMessages
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppIncomingOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppPendingOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCompletedOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalEarnings />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppRecentOrders />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppRecentMessages />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
