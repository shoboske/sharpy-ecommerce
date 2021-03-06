import { merge } from 'lodash';
//
import { BaseOptionChart } from '../../charts';
import { monthlyLabels, totalCustomers } from '../../../_mocks_/chartData';
import { DashboardChartCard } from './DashboardChartCard';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Total Customers',
    type: 'area',
    data: totalCustomers
  }
];

export default function AppTotalCustomers() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'solid', colors: ['#FEF6E4'] },
    labels: monthlyLabels,
    xaxis: {
      type: 'datetime',
      show: false,
      labels: {
        show: false
      }
    },
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
    colors: ['#FFC543']
  });

  return (
    <DashboardChartCard
      chartOptions={chartOptions}
      title="TOTAL CUSTOMERS"
      value={0}
      series={CHART_DATA}
    />
  );
}
