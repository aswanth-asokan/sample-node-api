const httpStatus = require('http-status');
const axios = require('axios');
const db = require('../../../models');
const ApiError = require('../../../utils/ApiError');

const State = db.state;

/**
 * @description Get states list
 * @returns {JSON} states
 */
const getStates = async () => {
  const states = await State.findAll();
  return states;
};

/**
 * @description Get vehicle details
 * @param {string} vin - vin number
 * @returns {JSON} vehicle details
 */
const getVehicleDetails = async (vin) => {
  const vinFormat = /^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/;
  if (!vinFormat.test(vin)) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Invalid vin');
  try {
    let { Results } = (await axios.get(`${process.env.VIN_API}${vin}?format=json`)).data;
    Results = Results
      ? Results.filter((key) => key.Variable === 'Make' || key.Variable === 'Model' || key.Variable === 'Model Year')
      : [];
    return Results;
  } catch (err) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Results not found');
  }
};

module.exports = {
  getStates,
  getVehicleDetails,
};
