/**
 * @typedef NotificationData
 * @property {string} type ENUM('comment' || 'upvote')
 * @property {string} userId user that will receive the notification
 * @property {string} [commentId] id of comment that was created.
 * OPTIONAL and depends on type = 'comment'
 */
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
    reportId: {
      type: DataTypes.UUID,
      allowNull: true,
      onDelete: 'CASCADE'
    },
    inviteId: {
      type: DataTypes.UUID,
      allowNull: true,
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    type: {
      type: DataTypes.ENUM('upvote', 'comment', 'report'),
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
    Notification.belongsTo(models.Report, {
      foreignKey: 'reportId', as: 'report', timestamps: false
    });
    Notification.belongsTo(models.User, {
      foreignKey: 'userId', as: 'target', timestamps: false
    });
  };
  return Notification;
};
