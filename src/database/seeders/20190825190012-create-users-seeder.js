import uuid from 'uuid';
import { passwordHash } from '../../helpers/hash';

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      userId: uuid(),
      name: 'Admin',
      username: 'admin',
      email: 'admin@mail.com',
      password: await passwordHash('123456'),
    },
    {
      userId: uuid(),
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@mail.com',
      password: await passwordHash('123456'),
    },
  ], {}),

  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
