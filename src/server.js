const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

//! Start App
const app = express();

//! Some variables
const port = process.env.PORT || 3001;

//! Permissions
//* Waiting...

//! DataBase
const databaseUrl = process.env.MONGO_URL;
mongoose.connect(databaseUrl, { useNewUrlParser: true });

//! Routes
app.use(require('./routes'));

//! Listen Ports
app.listen(port, () => console.log(`Port ${port} is open.`));
