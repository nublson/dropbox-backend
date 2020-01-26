const routes = require('express').Router()

routes.get('/', (req, res) => res.send('Dropbox Clone!'))

module.exports = routes
