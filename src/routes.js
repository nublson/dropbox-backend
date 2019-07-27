const express = require('express');

const routes = express.Router();
routes.get('/', (req, res) => {
	res.send('DropBox Clone');
});

module.exports = routes;
