const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const businessTypeService = require('./business_type.service');

/** Get business types list */
const getBusinessTypes = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await businessTypeService.getBusinessTypes(req));
});

/** Save business type */
const createBusinessType = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await businessTypeService.createBusinessType(req.body));
});

/** Get business type by businessType id */
const getBusinessTypeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await businessTypeService.getBusinessTypeById(id));
});

/** Update business type by businessType id */
const updateBusinessType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await businessTypeService.updateBusinessType(id, req.body));
});

/** Delete business type by businessType id */
const deleteBusinessType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await businessTypeService.deleteBusinessType(id));
});

module.exports = {
  getBusinessTypes,
  createBusinessType,
  getBusinessTypeById,
  updateBusinessType,
  deleteBusinessType,
};
