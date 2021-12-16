import ReactApexChart from 'react-apexcharts';
import { array, number, string } from 'prop-types';
import { Icon } from '@iconify/react';

import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import arrowUpFill from '@iconify/icons-eva/arrow-up-fill';
import arrowDownFill from '@iconify/icons-eva/arrow-down-fill';

import { fPercent } from '../../../utils/formatNumber';

export function DashboardChartCard({ chartOptions, title, value = 0, series = [] }) {
  function renderPercentageChange(series) {
    if (series.length < 1) return <></>;

    const trend = getPercentageChange(series[0].data);
    const changeType = trend >= 0;

    return (
      <Typography
        variant="caption"
        alignItems="center"
        display="flex"
        color={changeType ? 'green' : 'red'}
      >
        {fPercent(trend)}
        <Icon icon={changeType ? arrowUpFill : arrowDownFill} width={30} />
      </Typography>
    );
  }
  function getPercentageChange(list = []) {
    if (list.length < 2) return 0;

    const oldValue = list[list.length - 2];
    const newValue = list[list.length - 1];
    return ((newValue - oldValue) / oldValue) * 100;
  }

  return (
    <Card sx={{ ':hover': { border: 1, borderColor: chartOptions.colors[0] } }}>
      <CardHeader sx={{ pb: 0, mb: 0 }} title={title} />
      <Box sx={{ p: 0, pb: 1, mt: 0 }} dir="ltr">
        <Stack direction="row" justifyContent="space-between" paddingX={2}>
          <Typography variant="h4">{value}</Typography>
          {renderPercentageChange(series)}
        </Stack>
        <ReactApexChart type="area" series={series} options={chartOptions} height={100} />
      </Box>
    </Card>
  );
}

DashboardChartCard.propTypes = {
  chartOptions: {},
  title: string,
  value: number,
  series: array
};
