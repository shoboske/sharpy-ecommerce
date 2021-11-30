import faker from 'faker';
// ----------------------------------------------------------------------

const account = {
  displayName: faker.name.findName(),
  email: faker.internet.email(),
  descriprion: faker.lorem.paragraph(3),
  photoURL: '/static/mock-images/avatars/avatar_default.jpg'
};

export default account;
