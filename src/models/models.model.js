module.exports = (sequelize, Sequelize) => {
  const models = sequelize.define('models', {
    model_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    model_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(50),
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
    updatedAt: {
      type: 'DateTime',
      default_value: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      field: 'updated_at',
    },
  });

  return models;
};
