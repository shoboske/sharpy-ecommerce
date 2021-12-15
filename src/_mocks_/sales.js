import faker from 'faker';

export const totalSalesLabels = [
  '01/01/2021',
  '02/01/2021',
  '03/01/2021',
  '04/01/2021',
  '05/01/2021',
  '06/01/2021',
  '07/01/2021',
  '08/01/2021',
  '09/01/2021',
  '10/01/2021',
  '11/01/2021'
];
export const todaySalesLabels = [...Array(11)]
  .map(() => faker.date.recent(0.3).toLocaleTimeString())
  .sort((date1, date2) => date1 - date2);

export const totalSales = [...Array(11)].map(() =>
  faker.datatype.number({ min: 2300, max: 2500, precision: 0.01 })
);

export const todaySales = [...Array(11)].map(() =>
  faker.datatype.number({ min: 0, max: 100, precision: 0.01 })
);
