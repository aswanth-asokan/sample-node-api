const express = require('express');
const generalRoute = require('./general/general.route');
const authRoute = require('./auth/auth.route');
const trailerTypeRoute = require('./trailer_types/trailer_type.route');
const cargoTypeRoute = require('./cargo_types/cargo_type.route');
const loadTypeRoute = require('./load_types/load_type.route');
const businessTypeRoute = require('./business_types/business_type.route');
const brandRoute = require('./brands/brand.route');
const modelRoute = require('./models/model.route');
const userTruckRoute = require('./user_trucks/user_truck.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: generalRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/trailer-type',
    route: trailerTypeRoute,
  },
  {
    path: '/cargo-type',
    route: cargoTypeRoute,
  },
  {
    path: '/business-type',
    route: businessTypeRoute,
  },
  {
    path: '/load-type',
    route: loadTypeRoute,
  },
  {
    path: '/brand',
    route: brandRoute,
  },
  {
    path: '/model',
    route: modelRoute,
  },
  {
    path: '/user-truck',
    route: userTruckRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
