const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const BusinessTypes = db.businessTypes;

/**
 * @description Get business types list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} business types
 */
const getBusinessTypes = async (req) => {
  const businessTypes = await paginate(BusinessTypes, req.query);
  if (!businessTypes) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Business types not found');
  }
  return businessTypes;
};

/**
 * @description Get business type by name
 * @param {String} name - business type name
 * @returns {JSON} business type data
 */
const getBusinessTypeByName = async (name) => {
  const result = await BusinessTypes.findAll({ where: { business_type_name: { [Op.like]: `%${name}%` } } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Business type name already exist');
  return result.dataValues;
};

/**
 * @description Create new business type
 * @param {JSON} body - contains business type request data
 * @returns {JSON} created business type
 */
const createBusinessType = async (body) => {
  await getBusinessTypeByName(body.business_type_name);
  const result = await BusinessTypes.create(body);
  return result.dataValues;
};

/**
 * @description Get business type by id
 * @param {Number} id - business type id
 * @returns {JSON} business type data
 */
const getBusinessTypeById = async (id) => {
  const result = await BusinessTypes.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Business type does not exist');
  return result.dataValues;
};

/**
 * @description Update given business type
 * @param {Number} id - business type id
 * @param {JSON} body - contains business type request data
 */
const updateBusinessType = async (id, body) => {
  await getBusinessTypeById(id);
  await BusinessTypes.update(body, {
    where: {
      business_type_id: id,
    },
  });
  const result = getBusinessTypeById(id);
  return result;
};

/**
 * @description Delete given business type
 * @param {Number} id - business type id
 */
const deleteBusinessType = async (id) => {
  await getBusinessTypeById(id);
  await BusinessTypes.destroy({
    where: {
      business_type_id: id,
    },
  });
};

module.exports = {
  getBusinessTypes,
  createBusinessType,
  getBusinessTypeById,
  getBusinessTypeByName,
  updateBusinessType,
  deleteBusinessType,
};
