const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const brandService = require('./brand.service');

/** Get brands list */
const getBrands = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await brandService.getBrands(req));
});

/** Save brand */
const createBrand = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await brandService.createBrand(req.body));
});

/** Get brand by brand id */
const getBrandById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await brandService.getBrandById(id));
});

/** Update brand by brand id */
const updateBrand = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await brandService.updateBrand(id, req.body));
});

/** Delete brand by brand id */
const deleteBrand = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await brandService.deleteBrand(id));
});

module.exports = {
  getBrands,
  createBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
};
