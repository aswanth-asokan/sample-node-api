const Joi = require('joi');

const createBusinessType = {
  body: Joi.object().keys({
    business_type_name: Joi.string().required(),
    status: Joi.number(),
  }),
};

const getBusinessTypes = {
  query: Joi.object()
    .keys({
      business_type_name: Joi.string(),
      page: Joi.number().integer(),
      size: Joi.number().integer(),
      sortBy: Joi.string(),
    })
    .unknown(true),
};

const getBusinessTypeById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateBusinessType = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      business_type_name: Joi.string().required(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteBusinessType = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createBusinessType,
  getBusinessTypes,
  getBusinessTypeById,
  updateBusinessType,
  deleteBusinessType,
};
