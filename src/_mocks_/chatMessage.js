import faker from 'faker';
import { sample, orderBy } from 'lodash';
// utils
import CHATLIST from './chatList';

// ----------------------------------------------------------------------

const messages = [...Array(240)].map(() => ({
  content: faker.lorem.sentences(1),
  self: faker.datatype.boolean(),
  type: sample(['text']),
  createdAt: faker.date.recent(),
  userId: sample(CHATLIST.map((m) => m.id))
}));
messages.map((item) => {
  if (!item.self) item.avatar = CHATLIST.find((u) => u.id === item.userId).avatarUrl;
  return item;
});

export default orderBy(messages, ['createdAt']);
