import faker from 'faker';

export const monthlyLabels = [
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

const d = new Date();
export const hourlyLabels = [...Array(12)]
  .map(() => d.setHours(d.getHours() - 2, 0, 0) && d.toLocaleTimeString())
  .sort((date1, date2) => date1 - date2);

export const totalSales = [...Array(11)].map(() =>
  faker.datatype.number({ min: 2300, max: 2500, precision: 0.01 })
);

export const todaySales = [...Array(12)].map(() =>
  faker.datatype.number({ min: 0, max: 100, precision: 0.01 })
);

export const totalCustomers = [...Array(11)].map(() =>
  faker.datatype.number({ min: 12, max: 150, precision: 0.01 })
);
