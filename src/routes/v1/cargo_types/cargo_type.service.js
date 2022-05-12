const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const CargoTypes = db.cargoTypes;

/**
 * @description Get cargo types list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} cargo types
 */
const getCargoTypes = async (req) => {
  const cargoTypes = await paginate(CargoTypes, req.query);
  if (!cargoTypes) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Cargo types not found');
  }
  return cargoTypes;
};

/**
 * @description Get cargo type by name
 * @param {String} name - cargo type name
 * @returns {JSON} cargo type data
 */
const getCargoTypeByName = async (name) => {
  const result = await CargoTypes.findAll({ where: { cargo_type_name: { [Op.like]: `%${name}%` } } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Cargo type name already exist');
  return result.dataValues;
};

/**
 * @description Create new cargo type
 * @param {JSON} body - contains cargo type request data
 * @returns {JSON} created cargo type
 */
const createCargoType = async (body) => {
  await getCargoTypeByName(body.cargo_type_name);
  const result = await CargoTypes.create(body);
  return result.dataValues;
};

/**
 * @description Get cargo type by id
 * @param {Number} id - cargo type id
 * @returns {JSON} cargo type data
 */
const getCargoTypeById = async (id) => {
  const result = await CargoTypes.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Cargo type does not exist');
  return result.dataValues;
};

/**
 * @description Update given cargo type
 * @param {Number} id - cargo type id
 * @param {JSON} body - contains cargo type request data
 */
const updateCargoType = async (id, body) => {
  await getCargoTypeById(id);
  await CargoTypes.update(body, {
    where: {
      cargo_type_id: id,
    },
  });
  const result = getCargoTypeById(id);
  return result;
};

/**
 * @description Delete given cargo type
 * @param {Number} id - cargo type id
 */
const deleteCargoType = async (id) => {
  await getCargoTypeById(id);
  await CargoTypes.destroy({
    where: {
      cargo_type_id: id,
    },
  });
};

module.exports = {
  getCargoTypes,
  createCargoType,
  getCargoTypeById,
  getCargoTypeByName,
  updateCargoType,
  deleteCargoType,
};
