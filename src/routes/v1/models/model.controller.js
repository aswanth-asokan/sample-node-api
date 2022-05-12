const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const modelService = require('./model.service');

/** Get models list */
const getModels = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await modelService.getModels(req));
});

/** Save model */
const createModel = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await modelService.createModel(req.body));
});

/** Get model by model id */
const getModelById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await modelService.getModelById(id));
});

/** Update model by model id */
const updateModel = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await modelService.updateModel(id, req.body));
});

/** Delete model by model id */
const deleteModel = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await modelService.deleteModel(id));
});

module.exports = {
  getModels,
  createModel,
  getModelById,
  updateModel,
  deleteModel,
};
