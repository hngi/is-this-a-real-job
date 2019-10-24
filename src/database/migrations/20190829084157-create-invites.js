export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Invites', {
      inviteId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      media: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          return this.getDataValue('media').split(';');
        },
        set(val) {
          this.setDataValue('media', val.join(';'));
        },
      },
      upVotes: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }),
  down: queryInterface => queryInterface.dropTable('Invites'),
};
