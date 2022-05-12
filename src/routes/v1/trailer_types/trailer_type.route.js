const express = require('express');
const trailerTypeController = require('./trailer_type.controller');
const validate = require('../../../middlewares/validate');
const trailerType = require('./trailer_type.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(trailerType.getTrailerTypes), trailerTypeController.getTrailerTypes)
  .post(validate(trailerType.createTrailerType), trailerTypeController.createTrailerType);

router
  .route('/:id')
  .get(validate(trailerType.getTrailerTypeById), trailerTypeController.getTrailerTypeById)
  .patch(validate(trailerType.updateTrailerType), trailerTypeController.updateTrailerType)
  .delete(validate(trailerType.deleteTrailerType), trailerTypeController.deleteTrailerType);

module.exports = router;
