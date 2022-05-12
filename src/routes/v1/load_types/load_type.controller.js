const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const loadTypeService = require('./load_type.service');

/** Get load types list */
const getLoadTypes = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await loadTypeService.getLoadTypes(req));
});

/** Save load type */
const createLoadType = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await loadTypeService.createLoadType(req.body));
});

/** Get load type by loadType id */
const getLoadTypeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await loadTypeService.getLoadTypeById(id));
});

/** Update load type by loadType id */
const updateLoadType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await loadTypeService.updateLoadType(id, req.body));
});

/** Delete load type by loadType id */
const deleteLoadType = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await loadTypeService.deleteLoadType(id));
});

module.exports = {
  getLoadTypes,
  createLoadType,
  getLoadTypeById,
  updateLoadType,
  deleteLoadType,
};
