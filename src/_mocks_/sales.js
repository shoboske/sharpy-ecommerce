import faker from 'faker';

export const totalSales = [...Array(11)].map(() =>
  faker.datatype.number({ min: 2300, max: 2500, precision: 0.01 })
);
