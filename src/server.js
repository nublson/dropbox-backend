const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv/config');

//! Start App
const app = express();
app.use(cors()); //* Access the api from other domain
const server = require('http').Server(app);
const io = require('socket.io')(server);

//! Real-Time config
io.on('connection', socket => {
	socket.on('connectRoom', box => {
		socket.join(box);
	});
});

//! Permissions
app.use(express.json()); //* Allow the server to understand the JSON format request
app.use(express.urlencoded({ extended: true })); //* Allows us to send files in our requests
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); //* Every time the user accesses the "/files" route, we will look for the physical files inside the TMP folder

//! DataBase
const databaseUrl = process.env.MONGO_URL;
mongoose.connect(
	'mongodb+srv://theNletter:FernandeZ05@@thenletter-xbk8q.mongodb.net/DropBoxClone?retryWrites=true&w=majority',
	{ useNewUrlParser: true }
);

//! Middleware
app.use((req, res, next) => {
	req.io = io;

	next();
});

//! Routes
app.use(require('./routes'));

//! Listen Ports
server.listen(process.env.PORT || 3333);
