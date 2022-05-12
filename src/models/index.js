const Sequelize = require('sequelize');
const sequelize = require('../config/dbconfig');

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.state = require('./state.model')(sequelize, Sequelize);
db.trailerTypes = require('./trailer_types.model')(sequelize, Sequelize);
db.cargoTypes = require('./cargo_types.model')(sequelize, Sequelize);
db.loadTypes = require('./load_types.model')(sequelize, Sequelize);
db.businessTypes = require('./business_types.model')(sequelize, Sequelize);
db.brands = require('./brands.model')(sequelize, Sequelize);
db.models = require('./models.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.partner_profile = require('./partner_profile.model')(sequelize, Sequelize);
db.shipper_profile = require('./shipper_profile.model')(sequelize, Sequelize);
db.userTrucks = require('./user_trucks.model')(sequelize, Sequelize);

db.brands.hasMany(db.models, {
  foreignKey: { allowNull: false, name: 'brand_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});
db.models.belongsTo(db.brands, {
  foreignKey: { allowNull: false, name: 'brand_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});
db.user.hasOne(db.partner_profile, { foreignKey: { allowNull: false, name: 'user_id' } });
db.partner_profile.belongsTo(db.user, { foreignKey: { allowNull: false, name: 'user_id' } });
db.user.hasOne(db.shipper_profile, { foreignKey: { allowNull: false, name: 'user_id' } });
db.shipper_profile.belongsTo(db.user, { foreignKey: { allowNull: false, name: 'user_id' } });
db.businessTypes.hasMany(db.shipper_profile, { foreignKey: { allowNull: true, name: 'business_type_id' } });
db.shipper_profile.belongsTo(db.businessTypes, { foreignKey: { allowNull: true, name: 'business_type_id' } });
db.models.hasMany(db.userTrucks, {
  foreignKey: { allowNull: false, name: 'model_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});
db.userTrucks.belongsTo(db.models, {
  foreignKey: { allowNull: false, name: 'model_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});
db.user.hasMany(db.userTrucks, {
  foreignKey: { allowNull: false, name: 'user_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});
db.userTrucks.belongsTo(db.user, {
  foreignKey: { allowNull: false, name: 'user_id' },
  onDelete: 'restrict',
  onUpdate: 'cascade',
});

sequelize.sync();

module.exports = db;
