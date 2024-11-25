const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/items');
const { validateUserInput } = require('./middlewares/inputValidation');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/items', itemRoutes);

module.exports = app;
