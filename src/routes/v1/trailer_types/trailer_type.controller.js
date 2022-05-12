const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const trailerTypeService = require('./trailer_type.service');

/** Get trailer types list */
const getTrailerTypes = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await trailerTypeService.getTrailerTypes(req));
});

/** Save trailer type */
const createTrailerType = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await trailerTypeService.createTrailerType(req.body));
});

/** Get trailer type by trailerType id */
const getTrailerTypeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await trailerTypeService.getTrailerTypeById(id));
});

/** Update trailer type by trailerType id */
const updateTrailerType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await trailerTypeService.updateTrailerType(id, req.body));
});

/** Delete trailer type by trailerType id */
const deleteTrailerType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await trailerTypeService.deleteTrailerType(id));
});

module.exports = {
  getTrailerTypes,
  createTrailerType,
  getTrailerTypeById,
  updateTrailerType,
  deleteTrailerType,
};
