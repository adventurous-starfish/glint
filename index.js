var app = require('./server/server.js');

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Server is now listening on port ' + port);
