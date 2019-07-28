const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

//! Start App
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//! Some variables
const port = process.env.PORT || 3333;

//! Permissions
app.use(express.json()); //* Allow the server to understand the JSON format request
app.use(express.urlencoded({ extended: true })); //* Allows us to send files in our requests
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); //* Every time the user accesses the "/files" route, we will look for the physical files inside the TMP folder

//! DataBase
const databaseUrl = process.env.MONGO_URL;
mongoose.connect(databaseUrl, { useNewUrlParser: true });

//! Routes
app.use(require('./routes'));

//! Listen Ports
server.listen(port, () => console.log(`Port ${port} is open.`));
