const express = require('express');
const brandController = require('./brand.controller');
const validate = require('../../../middlewares/validate');
const brand = require('./brand.validate');

const router = express.Router();

router
  .route('/')
  .get(validate(brand.getBrands), brandController.getBrands)
  .post(validate(brand.createBrand), brandController.createBrand);

router
  .route('/:id')
  .get(validate(brand.getBrandById), brandController.getBrandById)
  .patch(validate(brand.updateBrand), brandController.updateBrand)
  .delete(validate(brand.deleteBrand), brandController.deleteBrand);

module.exports = router;
