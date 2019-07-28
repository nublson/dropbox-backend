const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();
const upload = multer(multerConfig);

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//! Box routes
routes.get('/box/:id', BoxController.show);
routes.post('/box', BoxController.store);

//! File routes
routes.post('/box/:id/files', upload.single('file'), FileController.store);

module.exports = routes;
