const Joi = require('joi');

const createUserTruck = {
  body: Joi.object().keys({
    user_id: Joi.number().required(),
    model_id: Joi.number().required(),
    year: Joi.number(),
    vin: Joi.string()
      .pattern(/^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/)
      .message('Invalid vin'),
    status: Joi.number(),
  }),
};

const getUserTrucks = {
  query: Joi.object().keys({
    user_id: Joi.number(),
    model_id: Joi.number(),
    year: Joi.number(),
    vin: Joi.string(),
    page: Joi.number().integer(),
    size: Joi.number().integer(),
    sortBy: Joi.string(),
  }),
};

const getUserTruckById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateUserTruck = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      user_id: Joi.number().required(),
      model_id: Joi.number().required(),
      year: Joi.number(),
      vin: Joi.string(),
      status: Joi.number(),
      updated_by: Joi.number(),
    })
    .min(1),
};

const deleteUserTruck = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createUserTruck,
  getUserTrucks,
  getUserTruckById,
  updateUserTruck,
  deleteUserTruck,
};
