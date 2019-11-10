export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    inviteId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    userId: { // The user who made the comment.
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Comment.associate = (models) => {
    // Comment.belongsTo(models.Invite, {
    //   foreignKey: 'inviteId', as: 'invite', timestamps: false
    // });
    Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'user', timestamps: false });
  };
  return Comment;
};
