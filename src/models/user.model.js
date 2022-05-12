const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    'user',
    {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          isEmail: true,
          isUnique(value, done) {
            user
              .findOne({
                where: { email: value },
                attributes: ['email'],
              })
              .then(function (email, error) {
                if (error) {
                  done(error);
                }
                if (email) {
                  done(new Error('email already in use'));
                }
                done();
              });
          },
        },
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      user_type: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      is_email_verified: {
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
    },
    {
      hooks: {
        beforeCreate: async (record) => {
          // eslint-disable-next-line no-param-reassign
          record.dataValues.password = await bcrypt.hash(record.dataValues.password, 8);
        },
        beforeUpdate: async (record) => {
          // eslint-disable-next-line no-param-reassign
          record.dataValues.password = await bcrypt.hash(record.dataValues.password, 8);
        },
      },
    }
  );

  return user;
};
