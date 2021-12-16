// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppRecentOrders,
  AppRecentMessages,
  AppTotalSales,
  AppTodaySales,
  AppTotalCustomers,
  AppTodayCustomers
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Sharpy">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Sales Overview</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalSales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTodaySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalCustomers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTodayCustomers />
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
