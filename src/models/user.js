import uuid from 'uuid';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      googleId: {
        type: DataTypes.STRING
      },
      facebookId: {
        type: DataTypes.STRING
      },
      twitterId: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: {
        type: DataTypes.STRING
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );

  User.associate = models => {
    User.hasMany(models.Invite, { foreignKey: 'userId', onDelete: 'CASCADE' });
    User.hasMany(models.Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };

  return User;
};
