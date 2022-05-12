const httpStatus = require('http-status');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const { userTrucks } = db;

/**
 * @description Get user trucks list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} user trucks
 */
const getUserTrucks = async (req) => {
  const models = await paginate(userTrucks, req.query);
  if (!models) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Trucks not found');
  }
  return models;
};

/**
 * @description Create new truck for user
 * @param {JSON} body - contains user truck request data
 * @returns {JSON} created truck
 */
const createUserTruck = async (body) => {
  const result = await userTrucks.create(body);
  return result.dataValues;
};

/**
 * @description Get truck by id
 * @param {Number} id - truck id
 * @returns {JSON} user truck data
 */
const getUserTruckById = async (id) => {
  const result = await userTrucks.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Truck does not exist');
  return result.dataValues;
};

/**
 * @description Update user truck by id
 * @param {Number} id - truck id
 * @param {JSON} body - contains user truck request data
 */
const updateUserTruck = async (id, body) => {
  await getUserTruckById(id);
  await userTrucks.update(body, {
    where: {
      truck_id: id,
    },
  });
  const result = getUserTruckById(id);
  return result;
};

/**
 * @description Delete given user truck
 * @param {Number} id - truck id
 */
const deleteUserTruck = async (id) => {
  await getUserTruckById(id);
  await userTrucks.destroy({
    where: {
      truck_id: id,
    },
  });
};

module.exports = {
  getUserTrucks,
  createUserTruck,
  getUserTruckById,
  updateUserTruck,
  deleteUserTruck,
};
