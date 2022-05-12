const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const userTruck = require('./user_truck.service');

/** Get user trucks list */
const getUserTrucks = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json(await userTruck.getUserTrucks(req));
});

/** Save user truck */
const createUserTruck = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json(await userTruck.createUserTruck(req.body));
});

/** Get user truck by truck id */
const getUserTruckById = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await userTruck.getUserTruckById(id));
});

/** Update user truck by truck id */
const updateUserTruck = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await userTruck.updateUserTruck(id, req.body));
});

/** Delete user truck by truck id */
const deleteUserTruck = catchAsync(async (req, res) => {
  const { id } = req.params;
  res.status(httpStatus.OK).json(await userTruck.deleteUserTruck(id));
});

module.exports = {
  getUserTrucks,
  createUserTruck,
  getUserTruckById,
  updateUserTruck,
  deleteUserTruck,
};
