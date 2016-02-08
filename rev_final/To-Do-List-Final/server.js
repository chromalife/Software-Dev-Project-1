var util = require('util');

var app = require('express')();
var server = require('http').Server(app);

var config = require('./server/config/config');

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

require('./server/config/mongoose')(config);

server.listen(config.port, function() {
    util.log('Listening on port: ' + config.port);
});
