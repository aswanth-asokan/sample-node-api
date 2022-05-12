const express = require('express');
const validate = require('../../../middlewares/validate');
const authValidation = require('./auth.validation');
const authController = require('./auth.controller');

const router = express.Router();

router.post('/register/partner', validate(authValidation.registerPartner), authController.registerPartner);
router.post('/register/shipper', validate(authValidation.registerShipper), authController.registerShipper);

module.exports = router;
