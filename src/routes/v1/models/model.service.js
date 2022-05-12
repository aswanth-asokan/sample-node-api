const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const Models = db.models;

/**
 * @description Get models list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} models
 */
const getModels = async (req) => {
  const models = await paginate(Models, req.query);
  if (!models) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Models not found');
  }
  return models;
};

/**
 * @description Get model by name
 * @param {String} name - model name
 * @returns {JSON} model data
 */
const getModelByName = async (brandId, name) => {
  const result = await Models.findAll({ where: { model_name: { [Op.like]: `%${name}%` }, brand_id: brandId } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Model name already exists for given brand');
  return result.dataValues;
};

/**
 * @description Create new model
 * @param {JSON} body - contains model request data
 * @returns {JSON} created model
 */
const createModel = async (body) => {
  await getModelByName(body.brand_id, body.model_name);
  const result = await Models.create(body);
  return result.dataValues;
};

/**
 * @description Get model by id
 * @param {Number} id - model id
 * @returns {JSON} model data
 */
const getModelById = async (id) => {
  const result = await Models.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Model does not exist');
  return result.dataValues;
};

/**
 * @description Update given model
 * @param {Number} id - model id
 * @param {JSON} body - contains model request data
 */
const updateModel = async (id, body) => {
  await getModelById(id);
  await Models.update(body, {
    where: {
      model_id: id,
    },
  });
  const result = getModelById(id);
  return result;
};

/**
 * @description Delete given model
 * @param {Number} id - model id
 */
const deleteModel = async (id) => {
  await getModelById(id);
  try {
    await Models.destroy({
      where: {
        model_id: id,
      },
    });
  } catch (err) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Model already in use');
  }
};

module.exports = {
  getModels,
  createModel,
  getModelById,
  getModelByName,
  updateModel,
  deleteModel,
};
