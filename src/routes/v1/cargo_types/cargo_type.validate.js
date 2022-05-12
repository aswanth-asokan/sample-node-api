const Joi = require('joi');

const createCargoType = {
  body: Joi.object().keys({
    cargo_type_name: Joi.string().required(),
    status: Joi.number(),
    description: Joi.string(),
  }),
};

const getCargoTypes = {
  query: Joi.object()
    .keys({
      cargo_type_name: Joi.string(),
      page: Joi.number().integer(),
      size: Joi.number().integer(),
      sortBy: Joi.string(),
    })
    .unknown(true),
};

const getCargoTypeById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateCargoType = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      cargo_type_name: Joi.string().required(),
      status: Joi.number(),
      description: Joi.string(),
    })
    .min(1),
};

const deleteCargoType = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createCargoType,
  getCargoTypes,
  getCargoTypeById,
  updateCargoType,
  deleteCargoType,
};
