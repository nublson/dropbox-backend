const express = require('express');
const BoxController = require('./controllers/BoxController');

const routes = express.Router();

//! routes
routes.post('/box', BoxController.store);

module.exports = routes;
