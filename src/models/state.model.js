module.exports = (sequelize, Sequelize) => {
  const state = sequelize.define(
    'state',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );

  return state;
};
