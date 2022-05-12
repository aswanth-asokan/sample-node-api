const Joi = require('joi');

const createTrailerType = {
  body: Joi.object().keys({
    trailer_type_name: Joi.string().required(),
    status: Joi.number(),
    thumbnail: Joi.string(),
  }),
};

const getTrailerTypes = {
  query: Joi.object()
    .keys({
      trailer_type_name: Joi.string(),
      size: Joi.number().integer(),
      page: Joi.number().integer(),
      sortBy: Joi.string(),
    })
    .unknown(true),
};

const getTrailerTypeById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateTrailerType = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      trailer_type_name: Joi.string().required(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteTrailerType = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createTrailerType,
  getTrailerTypes,
  getTrailerTypeById,
  updateTrailerType,
  deleteTrailerType,
};
