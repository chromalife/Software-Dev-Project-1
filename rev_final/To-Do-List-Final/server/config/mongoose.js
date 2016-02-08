var mongoose = require('mongoose');
var util = require('util');

function mongooseInit(config) {
    mongoose.connect(config.db.url);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        util.log('TODO db opened');
    });
}

module.exports = exports = mongooseInit;
