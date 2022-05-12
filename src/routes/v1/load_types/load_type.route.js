const express = require('express');
const loadTypeController = require('./load_type.controller');
const validate = require('../../../middlewares/validate');
const loadType = require('./load_type.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(loadType.getLoadTypes), loadTypeController.getLoadTypes)
  .post(validate(loadType.createLoadType), loadTypeController.createLoadType);

router
  .route('/:id')
  .get(validate(loadType.getLoadTypeById), loadTypeController.getLoadTypeById)
  .patch(validate(loadType.updateLoadType), loadTypeController.updateLoadType)
  .delete(validate(loadType.deleteLoadType), loadTypeController.deleteLoadType);

module.exports = router;
