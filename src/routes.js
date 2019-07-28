const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();
const upload = multer(multerConfig);

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//! routes
routes.post('/box', BoxController.store);
routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;
