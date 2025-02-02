module.exports = (sequelize, Sequelize) => {
  const partnerProfile = sequelize.define(
    'partner_profile',
    {
      partner_profile_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      profile_image: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      terms_accepted: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
        validationFailed: async (record, options, error) => {
          if (error && record.isNewRecord) {
            /* eslint-disable global-require */
            const db = require('.');
            /* eslint-enable global-require */
            const User = db.user;
            await User.destroy({
              where: {
                user_id: record.dataValues.user_id,
              },
            });
          }
        },
      },
    }
  );

  return partnerProfile;
};
