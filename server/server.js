var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/glint');

// set up routes
app.get('/', function(req, res) {
    res.send(200);
});

module.exports = app;
