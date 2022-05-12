const ROLES = {
  ADMIN: 1,
  PARTNER: 2,
  SHIPPER: 3,
};
const allRoles = {
  1: [],
  2: [],
  3: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
  ROLES,
};
