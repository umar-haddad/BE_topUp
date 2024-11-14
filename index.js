const express = require('express');
const bluebird = require('bluebird');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware untuk parsing JSON
app.use(express.json());
app.use(bodyParser.json());

// import API Routes
const setPublicRoutes = require('./routes/public');

// through data
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//set routes
setPublicRoutes(app);

//finally
module.exports = app; 




