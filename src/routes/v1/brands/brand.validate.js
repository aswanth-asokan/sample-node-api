const Joi = require('joi');

const createBrand = {
  body: Joi.object().keys({
    brand_name: Joi.string().required(),
    logo: Joi.string(),
    status: Joi.number(),
  }),
};

const getBrands = {
  query: Joi.object()
    .keys({
      brand_name: Joi.string(),
      page: Joi.number().integer(),
      size: Joi.number().integer(),
      sortBy: Joi.string(),
    })
    .unknown(true),
};

const getBrandById = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

const updateBrand = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      brand_name: Joi.string().required(),
      logo: Joi.string(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteBrand = {
  params: Joi.object().keys({
    id: Joi.number(),
  }),
};

module.exports = {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};
