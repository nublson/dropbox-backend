const routes = require('express').Router()

const BoxController = require('./controllers/BoxController')

routes.post('/boxes', BoxController.store)

module.exports = routes
