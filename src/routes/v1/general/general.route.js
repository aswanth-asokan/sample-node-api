const express = require('express');
const generalController = require('./general.controller');

const router = express.Router();

router.get('/state', generalController.getStates);
router.get('/vehicle/:vin', generalController.getVehicleDetails);

module.exports = router;
