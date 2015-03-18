var express = require('express');
var mongoose = require('mongoose');

var app = express();

// get the correct MongoDB connection depending on the environment
mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/glint';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB connection is open');
});

// connect the server to the middleware
require('./config/middleware.js')(app, express);

module.exports.app = app;
module.exports.db = db;
