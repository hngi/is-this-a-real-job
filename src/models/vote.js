
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    inviteId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    type: {
      type: DataTypes.ENUM('up', 'down'),
      allowNull: false,
    }
  }, {});
  Vote.associate = function (models) {
    Vote.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      timestamps: false
    });
    Vote.belongsTo(models.Invite, {
      foreignKey: 'inviteId',
      as: 'invite',
      timestamps: false
    });
  };
  return Vote;
};
