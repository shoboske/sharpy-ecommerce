import { merge } from 'lodash';
//
import { BaseOptionChart } from '../../charts';
import { hourlyLabels, todayCustomers } from '../../../_mocks_/chartData';
import { DashboardChartCard } from './DashboardChartCard';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'New Customers',
    type: 'area',
    data: todayCustomers
  }
];

export default function AppTodayCustomers() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'solid', colors: ['#FCEAEE'] },
    labels: hourlyLabels,
    xaxis: {
      type: 'categories',
      show: false,
      labels: {
        show: false
      }
    },
    yaxis: { show: false },
    tooltip: {
      shared: false,
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
    colors: ['#FF597E']
  });

  return (
    <DashboardChartCard
      chartOptions={chartOptions}
      title="NEW CUSTOMERS"
      value={0}
      series={CHART_DATA}
    />
  );
}
