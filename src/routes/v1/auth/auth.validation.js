const Joi = require('joi');

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};
const registerPartner = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    profile_image: Joi.string().allow(null, ''),
    city: Joi.string().required(),
    state: Joi.string().required(),
    mobile_number: Joi.string().max(15).required(),
    zip: Joi.string().required(),
  }),
};
const registerShipper = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile_number: Joi.string().max(15).required(),
    is_business: Joi.number().valid(1, 2).required(),
    business_type_id: Joi.number().allow(null),
    business_name: Joi.string().allow(null, ''),
  }),
};

module.exports = {
  registerPartner,
  registerShipper,
};
