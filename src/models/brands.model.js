module.exports = (sequelize, Sequelize) => {
  const brands = sequelize.define('brands', {
    brand_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    brand_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    logo: {
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

  return brands;
};
