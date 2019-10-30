import { SEED_INVITE_ID, SEED_USER_ID, SEED_INVITE_ID_2, SEED_INVITE_ID_3 } from "../../config/constants";

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Invites', [
      {
        inviteId: SEED_INVITE_ID,
        title: 'Invite at Lekki Phase II',
        body: 'I was invited to interview at a company at Lekki...',
        company: 'Howard Schools',
        location: '52 Abeokuta Street',
        userId: SEED_USER_ID,
        upVotes: 0,
        media: ["https://images.unsplash.com/photo-1572210297784-87d9eb73e323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"]
      },
      {
        inviteId: SEED_INVITE_ID_2,
        title: 'Job at Berger',
        body: 'What do you think about this company at Berger?',
        company: 'Nigerian Bottling Ltd',
        location: 'Berger, Lagos',
        userId: SEED_USER_ID,
        upVotes: 0,
        media: ["https://images.unsplash.com/photo-1572173733176-96bced653611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"]
      },
      {
        inviteId: SEED_INVITE_ID_3,
        title: 'Kokonkoro International PLC',
        body: 'There are many things that makes me suspect this company',
        company: 'Automobile Corp',
        location: 'Kano State',
        userId: SEED_USER_ID,
        upVotes: 0,
        media: ["https://images.unsplash.com/photo-1572236765640-7cc48f671668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"]
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Invites', null, {});
  }
};
