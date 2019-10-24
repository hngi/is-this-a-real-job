import {
    SEED_INVITE_ID,
    SEED_USER_ID,
    SEED_INVITE_ID_2,
} from '../../config/constants';

export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Invites',
            [
                {
                    inviteId: SEED_INVITE_ID,
                    title: 'Test post title',
                    body: 'Test post body will be here as lorem ipsum',
                    userId: SEED_USER_ID,
                    upVotes: 0,
                    media: ['https://google.com/favicon.png'],
                },
                {
                    inviteId: SEED_INVITE_ID_2,
                    title: 'Test post title',
                    body: 'Test post body will be here as lorem ipsum',
                    userId: SEED_USER_ID,
                    upVotes: 0,
                    media: ['https://google.com/favicon.png'],
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Invites', null, {});
    },
};
