require('marko/node-require').install();
require('marko/express');
require('../../db')


const express = require('express');
const app = express();


app.use('/static', express.static('src/app/public'));
const routes = require('../app/routes/routes');
routes(app);

module.exports = app;