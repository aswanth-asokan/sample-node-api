module.exports = (sequelize, Sequelize) => {
  const userTrucks = sequelize.define('user_trucks', {
    truck_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    vin: {
      type: Sequelize.STRING(17),
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    createdAt: {
      type: 'DateTime',
      default_value: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at',
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    updatedAt: {
      type: 'DateTime',
      default_value: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      field: 'updated_at',
    },
  });

  return userTrucks;
};
