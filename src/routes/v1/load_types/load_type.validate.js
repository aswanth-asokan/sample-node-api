const Joi = require('joi');

const createLoadType = {
  body: Joi.object().keys({
    load_type_name: Joi.string().required(),
    status: Joi.number(),
  }),
};

const getLoadTypes = {
  query: Joi.object()
    .keys({
      load_type_name: Joi.string(),
      page: Joi.number().integer(),
      size: Joi.number().integer(),
      sortBy: Joi.string(),
    })
    .unknown(true),
};

const getLoadTypeById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateLoadType = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      load_type_name: Joi.string().required(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteLoadType = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createLoadType,
  getLoadTypes,
  getLoadTypeById,
  updateLoadType,
  deleteLoadType,
};
