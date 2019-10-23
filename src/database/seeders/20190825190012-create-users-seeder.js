import { passwordHash } from '../../helpers/hash';
import { SEED_USER_ID, SEED_ADMIN_ID } from '../../config/constants';

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      userId: SEED_ADMIN_ID,
      name: 'Admin',
      username: 'admin',
      email: 'admin@mail.com',
      isAdmin: true,
      password: await passwordHash('123456'),
    },
    {
      userId: SEED_USER_ID,
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@mail.com',
      isAdmin: false,
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
