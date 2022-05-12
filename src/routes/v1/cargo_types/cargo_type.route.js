const express = require('express');
const cargoTypeController = require('./cargo_type.controller');
const validate = require('../../../middlewares/validate');
const cargoType = require('./cargo_type.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(cargoType.getCargoTypes), cargoTypeController.getCargoTypes)
  .post(validate(cargoType.createCargoType), cargoTypeController.createCargoType);

router
  .route('/:id')
  .get(validate(cargoType.getTrailerTypeById), cargoTypeController.getCargoTypeById)
  .patch(validate(cargoType.updateCargoType), cargoTypeController.updateCargoType)
  .delete(validate(cargoType.deleteTrailerType), cargoTypeController.deleteCargoType);

module.exports = router;
