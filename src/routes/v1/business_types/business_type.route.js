const express = require('express');
const businessTypeController = require('./business_type.controller');
const validate = require('../../../middlewares/validate');
const businessType = require('./business_type.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(businessType.getBusinessTypes), businessTypeController.getBusinessTypes)
  .post(validate(businessType.createBusinessType), businessTypeController.createBusinessType);

router
  .route('/:id')
  .get(validate(businessType.getBusinessTypeById), businessTypeController.getBusinessTypeById)
  .patch(validate(businessType.updateBusinessType), businessTypeController.updateBusinessType)
  .delete(validate(businessType.deleteBusinessType), businessTypeController.deleteBusinessType);

module.exports = router;
