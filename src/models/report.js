
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    reportId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    offenderId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    reporterId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    offence: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});

  Report.associate = (models) => {
    Report.belongsTo(models.User, {
      foreignKey: 'offenderId',
      as: 'offender',
      timestamps: false
    });
    Report.belongsTo(models.User, {
      foreignKey: 'reporterId',
      as: 'reporter',
      timestamps: false
    });
  };
  return Report;
};
