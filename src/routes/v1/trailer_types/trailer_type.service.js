const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const TrailerTypes = db.trailerTypes;

/**
 * @description Get trailer types list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} trailer types
 */
const getTrailerTypes = async (req) => {
  const trailerTypes = await paginate(TrailerTypes, req.query);
  if (!trailerTypes) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Trailer types not found');
  }
  return trailerTypes;
};

/**
 * @description Get trailer type by name
 * @param {String} name - trailer type name
 * @returns {JSON} trailer type data
 */
const getTrailerTypeByName = async (name) => {
  const result = await TrailerTypes.findAll({ where: { trailer_type_name: { [Op.like]: `%${name}%` } } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Trailer type name already exist');
  return result.dataValues;
};

/**
 * @description Create new trailer type
 * @param {JSON} body - contains trailer type request data
 * @returns {JSON} created trailer type
 */
const createTrailerType = async (body) => {
  await getTrailerTypeByName(body.trailer_type_name);
  const result = await TrailerTypes.create(body);
  return result.dataValues;
};

/**
 * @description Get trailer type by id
 * @param {Number} id - trailer type id
 * @returns {JSON} trailer type data
 */
const getTrailerTypeById = async (id) => {
  const result = await TrailerTypes.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Trailer type does not exist');
  return result.dataValues;
};

/**
 * @description Update given trailer type
 * @param {Number} id - trailer type id
 * @param {JSON} body - contains trailer type request data
 */
const updateTrailerType = async (id, body) => {
  await getTrailerTypeById(id);
  await TrailerTypes.update(body, {
    where: {
      trailer_type_id: id,
    },
  });
  const result = getTrailerTypeById(id);
  return result;
};

/**
 * @description Delete given trailer type
 * @param {Number} id - trailer type id
 */
const deleteTrailerType = async (id) => {
  await getTrailerTypeById(id);
  await TrailerTypes.destroy({
    where: {
      trailer_type_id: id,
    },
  });
};

module.exports = {
  getTrailerTypes,
  createTrailerType,
  getTrailerTypeById,
  getTrailerTypeByName,
  updateTrailerType,
  deleteTrailerType,
};
