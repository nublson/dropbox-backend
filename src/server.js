const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

//! Start App
const app = express();

//! Some variables
const port = process.env.PORT || 3333;

//! Permissions
app.use(express.json()); //* Allow the server to understand the JSON format request
app.use(express.urlencoded({ extended: true })); //* Allows us to send files in our requests

//! DataBase
const databaseUrl = process.env.MONGO_URL;
mongoose.connect(databaseUrl, { useNewUrlParser: true });

//! Routes
app.use(require('./routes'));

//! Listen Ports
app.listen(port, () => console.log(`Port ${port} is open.`));
