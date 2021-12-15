import { merge } from 'lodash';
//
import { BaseOptionChart } from '../../charts';
import { todaySalesLabels, todaySales } from '../../../_mocks_/sales';
import { DashboardChartCard } from './DashboardChartCard';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Sales Today',
    type: 'area',
    data: todaySales
  }
];

export default function AppTodaySales() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'solid', colors: ['#90EE90'] },
    labels: todaySalesLabels,
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
    colors: ['#32CD32']
  });

  return (
    <DashboardChartCard
      chartOptions={chartOptions}
      title="SALES TODAY"
      value={0}
      series={CHART_DATA}
    />
  );
}
