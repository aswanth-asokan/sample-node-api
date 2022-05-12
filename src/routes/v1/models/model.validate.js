const Joi = require('joi');

const createModel = {
  body: Joi.object().keys({
    model_name: Joi.string().required(),
    brand_id: Joi.number().required(),
    image: Joi.string(),
    status: Joi.number(),
  }),
};

const getModels = {
  query: Joi.object().keys({
    model_name: Joi.string(),
    brand_id: Joi.number(),
    page: Joi.number().integer(),
    size: Joi.number().integer(),
    sortBy: Joi.string(),
  }),
};

const getModelById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateModel = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      model_name: Joi.string().required(),
      image: Joi.string(),
      brand_id: Joi.number().required(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteModel = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createModel,
  getModels,
  getModelById,
  updateModel,
  deleteModel,
};
