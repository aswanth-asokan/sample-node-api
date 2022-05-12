module.exports = (sequelize, Sequelize) => {
  const loadTypes = sequelize.define('load_types', {
    load_type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    load_type_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
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

  return loadTypes;
};
