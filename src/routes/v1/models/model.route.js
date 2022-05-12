const express = require('express');
const modelController = require('./model.controller');
const validate = require('../../../middlewares/validate');
const model = require('./model.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(model.getModels), modelController.getModels)
  .post(validate(model.createModel), modelController.createModel);

router
  .route('/:id')
  .get(validate(model.getModelById), modelController.getModelById)
  .patch(validate(model.updateModel), modelController.updateModel)
  .delete(validate(model.deleteModel), modelController.deleteModel);

module.exports = router;
