const routes = require('express').Router()
const Multer = require('multer')

const multerConfig = require('./config/multer')
const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

const multer = Multer(multerConfig)

routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)
routes.post('/boxes/:id/files', multer.single('file'), FileController.store)

module.exports = routes
