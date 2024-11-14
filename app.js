const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/users');
const itemRoutes = require('./routes/items');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/items', itemRoutes);

module.exports = app;
