const httpStatus = require('http-status');
const { Op } = require('sequelize');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');
const paginate = require('../../../utils/paginate');

const Brands = db.brands;

/**
 * @description Get brands list
 * @param {String} query - contains page, size, searchValue
 * @returns {JSON} brands
 */
const getBrands = async (req) => {
  const brands = await paginate(Brands, req.query);
  if (!brands) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Brands not found');
  }
  return brands;
};

/**
 * @description Get brand by name
 * @param {String} name - brand name
 * @returns {JSON} brand data
 */
const getBrandByName = async (name) => {
  const result = await Brands.findAll({ where: { brand_name: { [Op.like]: `%${name}%` } } });
  if (result.length) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Brand name already exist');
  return result.dataValues;
};

/**
 * @description Create new brand
 * @param {JSON} body - contains brand request data
 * @returns {JSON} created brand
 */
const createBrand = async (body) => {
  await getBrandByName(body.brand_name);
  const result = await Brands.create(body);
  return result.dataValues;
};

/**
 * @description Get brand by id
 * @param {Number} id - brand id
 * @returns {JSON} brand data
 */
const getBrandById = async (id) => {
  const result = await Brands.findByPk(id);
  if (!result) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Brand does not exist');
  return result.dataValues;
};

/**
 * @description Update given brand
 * @param {Number} id - brand id
 * @param {JSON} body - contains brand request data
 */
const updateBrand = async (id, body) => {
  await getBrandById(id);
  await Brands.update(body, {
    where: {
      brand_id: id,
    },
  });
  const result = getBrandById(id);
  return result;
};

/**
 * @description Delete given brand
 * @param {Number} id - brand id
 */
const deleteBrand = async (id) => {
  await getBrandById(id);
  try {
    await Brands.destroy({
      where: {
        brand_id: id,
      },
    });
  } catch (err) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Brand already in use');
  }
};

module.exports = {
  getBrands,
  createBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
};
