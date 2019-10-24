export default (sequelize, DataTypes) => {
  const Invite = sequelize.define(
    'Invite',
    {
      inviteId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        onDelete: 'CASCADE',
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      media: {
        type: DataTypes.STRING,
      },
      upVotes: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Invite.associate = models => {
    Invite.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return Invite;
};
