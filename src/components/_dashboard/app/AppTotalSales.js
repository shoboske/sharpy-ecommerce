import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';
import { chartLabels, totalSales } from '../../../_mocks_/sales';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Total Sales',
    type: 'area',
    data: totalSales
  }
];

export default function AppTotalSales() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'solid', colors: ['#87cefa'] },
    labels: chartLabels,
    xaxis: { type: 'datetime', show: false },
    yaxis: { show: false },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        }
      }
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: ['#00f']
  });

  return (
    <Card>
      <CardHeader title="TOTAL SALES" subheader={`₺ ${0}`} sx={{ pb: 0, mb: 0 }} />
      <Box sx={{ p: 0, pb: 1, mt: 0 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={150} />
      </Box>
    </Card>
  );
}
