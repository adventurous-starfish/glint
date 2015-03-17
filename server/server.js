var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// configure Express app to use body-parser module
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// get the correct MongoDB connection depending on the environment
mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/glint';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB connection is open');
});

// set up routes
app.get('/', function(req, res) {
    res.send(200);
});

module.exports = app;
