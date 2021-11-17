import faker from 'faker';
import { sample } from 'lodash';
// utils
// import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const users = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  name: `Product #${faker.datatype.number(900)}`,
  customer: faker.name.findName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['accept', 'decline']),
  price: `₺${faker.datatype.number({ min: 60, max: 3500, precision: 100 })}`
}));

export default users;
