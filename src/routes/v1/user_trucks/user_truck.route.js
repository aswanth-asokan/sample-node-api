const express = require('express');
const userTruckController = require('./user_truck.controller');
const validate = require('../../../middlewares/validate');
const userTruck = require('./user_truck.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(userTruck.getUserTrucks), userTruckController.getUserTrucks)
  .post(validate(userTruck.createUserTruck), userTruckController.createUserTruck);

router
  .route('/:id')
  .get(validate(userTruck.getUserTruckById), userTruckController.getUserTruckById)
  .patch(validate(userTruck.updateUserTruck), userTruckController.updateUserTruck)
  .delete(validate(userTruck.deleteUserTruck), userTruckController.deleteUserTruck);

module.exports = router;
