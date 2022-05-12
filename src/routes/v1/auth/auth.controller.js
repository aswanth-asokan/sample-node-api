const httpStatus = require('http-status');
const ApiError = require('../../../utils/ApiError');
const catchAsync = require('../../../utils/catchAsync');
const userService = require('./auth.service');

const registerPartner = catchAsync(async (req, res) => {
  const user = await userService.registerPartner(req.body);
  if (user) {
    res.status(httpStatus.CREATED).send(user);
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not created');
  }
});

const registerShipper = catchAsync(async (req, res) => {
  const user = await userService.registerShipper(req.body);
  if (user) {
    res.status(httpStatus.CREATED).send(user);
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not created');
  }
});
module.exports = {
  registerPartner,
  registerShipper,
};
