const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const LoadTypes = db.loadTypes;

/**
 * @description Get load types list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} load types
 */
const getLoadTypes = async (req) => {
  const loadTypes = await paginate(LoadTypes, req.query);
  if (!loadTypes) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Load types not found');
  }
  return loadTypes;
};

/**
 * @description Get load type by name
 * @param {String} name - load type name
 * @returns {JSON} load type data
 */
const getLoadTypeByName = async (name) => {
  const result = await LoadTypes.findAll({ where: { load_type_name: { [Op.like]: `%${name}%` } } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Load type name already exist');
  return result.dataValues;
};

/**
 * @description Create new load type
 * @param {JSON} body - contains load type request data
 * @returns {JSON} created load type
 */
const createLoadType = async (body) => {
  await getLoadTypeByName(body.load_type_name);
  const result = await LoadTypes.create(body);
  return result.dataValues;
};

/**
 * @description Get load type by id
 * @param {Number} id - load type id
 * @returns {JSON} load type data
 */
const getLoadTypeById = async (id) => {
  const result = await LoadTypes.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Load type does not exist');
  return result.dataValues;
};

/**
 * @description Update given load type
 * @param {Number} id - load type id
 * @param {JSON} body - contains load type request data
 */
const updateLoadType = async (id, body) => {
  await getLoadTypeById(id);
  await LoadTypes.update(body, {
    where: {
      load_type_id: id,
    },
  });
  const result = getLoadTypeById(id);
  return result;
};

/**
 * @description Delete given load type
 * @param {Number} id - load type id
 */
const deleteLoadType = async (id) => {
  await getLoadTypeById(id);
  await LoadTypes.destroy({
    where: {
      load_type_id: id,
    },
  });
};

module.exports = {
  getLoadTypes,
  createLoadType,
  getLoadTypeById,
  getLoadTypeByName,
  updateLoadType,
  deleteLoadType,
};
