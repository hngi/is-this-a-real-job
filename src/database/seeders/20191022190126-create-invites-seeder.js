import { SEED_INVITE_ID, SEED_USER_ID } from "../../config/constants";

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Invites', [{
      inviteId: SEED_INVITE_ID,
      title: 'Test post title',
      body: 'Test post body will be here as lorem ipsum',
      userId: SEED_USER_ID,
      media: ["https://google.com/favicon.png"]
    }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Invites', null, {});
  }
};
