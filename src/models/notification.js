export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    notificationId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    commentId: {
      type: DataTypes.UUID,
      allowNull: true,
      onDelete: 'CASCADE'
    },
    inviteId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    type: {
      type: DataTypes.ENUM('upvote', 'comment'),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isSeen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  Notification.associate = (models) => {
    Notification.belongsTo(models.Invite, {
      foreignKey: 'inviteId', as: 'invite', timestamps: false
    });
    Notification.belongsTo(models.Comment, {
      foreignKey: 'commentId', as: 'comment', timestamps: false
    });
    Notification.belongsTo(models.User, {
      foreignKey: 'userId', as: 'target', timestamps: false
    });
  };
  return Notification;
};
