var app = require('./server/serverSetup.js').app;

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Server is now listening on port ' + port);
