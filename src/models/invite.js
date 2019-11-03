export default (sequelize, DataTypes) => {
  const Invite = sequelize.define(
    'Invite',
    {
      inviteId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        // eslint-disable-next-line max-len
        // defaultValue: DataTypes.UUIDV4, // there shouldn't be a default value here so an error will pop when it is not provided
        onDelete: 'CASCADE',
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      /*media: {
        type: DataTypes.STRING
      },*/ //No more file upload.
      upVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    }, {}
  );
  Invite.associate = models => {
    Invite.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
    Invite.hasMany(models.Comment, { foreignKey: 'inviteId', as: 'comments' });
    Invite.hasMany(models.Vote, { foreignKey: 'inviteId', as: 'votes' });
  };
  return Invite;
};
