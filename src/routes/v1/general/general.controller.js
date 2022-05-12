const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const generalService = require('./general.service');

/** Get states list */
const getStates = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await generalService.getStates());
});

/** Get vehicle details by vin */
const getVehicleDetails = catchAsync(async (req, res) => {
  const { vin } = req.params;
  res.status(httpStatus.OK).json(await generalService.getVehicleDetails(vin));
});

module.exports = {
  getStates,
  getVehicleDetails,
};
