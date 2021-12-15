import { merge } from 'lodash';
// material
//
import { BaseOptionChart } from '../../charts';
import { chartLabels, totalSales } from '../../../_mocks_/sales';
import { DashboardChartCard } from './DashboardChartCard';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Total Sales',
    type: 'area',
    data: totalSales,
    increase: percentageChange(totalSales[totalSales.length - 2], totalSales[totalSales.length - 1])
  }
];

export function percentageChange(oldValue, newValue) {
  return ((newValue - oldValue) / oldValue) * 100;
}

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
    <DashboardChartCard
      chartOptions={chartOptions}
      title="TOTAL SALES"
      value={0}
      series={CHART_DATA}
    />
  );
}
