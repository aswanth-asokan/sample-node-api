const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const cargoTypeService = require('./cargo_type.service');

/** Get cargo types list */
const getCargoTypes = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await cargoTypeService.getCargoTypes(req));
});

/** Get cargo types list */
const createCargoType = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await cargoTypeService.createCargoType(req.body));
});

/** Get cargo type by cargoType id */
const getCargoTypeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await cargoTypeService.getCargoTypeById(id));
});

/** Update cargo type by cargoType id */
const updateCargoType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await cargoTypeService.updateCargoType(id, req.body));
});

/** Delete cargo type by cargoType id */
const deleteCargoType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await cargoTypeService.deleteCargoType(id));
});

module.exports = {
  getCargoTypes,
  createCargoType,
  getCargoTypeById,
  updateCargoType,
  deleteCargoType,
};
