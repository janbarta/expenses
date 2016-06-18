'use strict';

const express = require('express');
const epilogue = require('epilogue');

let app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var models = require("./models");

// Initialize epilogue
epilogue.initialize({
    app: app,
    sequelize: models.sequelize
});

// Create REST resource
var categoryResource = epilogue.resource({
    model: models.sequelize.import('./models/category'),
    endpoints: ['/categories', '/categories/:id']
});

models.sequelize.sync().then(function () {
    var server = app.listen(3000, function() {
        console.log('Express server listening on port ' + server.address().port);
    });
});

module.exports = app;

