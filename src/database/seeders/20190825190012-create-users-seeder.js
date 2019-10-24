import { passwordHash } from '../../helpers/hash';
import { SEED_USER_ID, SEED_ADMIN_ID, SEED_USER_ID_2 } from '../../config/constants';

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      userId: SEED_ADMIN_ID,
      name: 'Admin',
      username: 'admin',
      email: 'admin@mail.com',
      password: await passwordHash('123456'),
      isAdmin: true,
    },
    {
      userId: SEED_USER_ID,
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@mail.com',
      password: await passwordHash('123456'),
      isAdmin: false,
    },
    {
      userId: SEED_USER_ID_2,
      name: 'Lionel Messi',
      username: 'messiless',
      email: 'messi@mail.com',
      password: await passwordHash('123456'),
      isAdmin: false,
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
