// const mongoose = require('mongoose');
const express = require('express');

const routes = require('./routes/routes');
const alphaRoutes = require('./routes/alphaRoutes');
const betaRoutes = require('./routes/betaRoutes');

const bodyParser = require('body-parser');

var app = express();

// acts as a middleware
// parses incoming request bodies in a middleware
app.use(bodyParser.json());

app.use('/', routes);
app.use('/', alphaRoutes);
app.use('/', betaRoutes);

const port = 3005;

app.listen(port, () => {
    console.log("App runs on localhost:" + port);
    
});