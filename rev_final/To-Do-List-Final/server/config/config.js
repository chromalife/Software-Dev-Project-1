var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = exports = {
	rootPath: rootPath,
	port: 3169,
	db: {
        url: 'mongodb://five:five1234@ds059155.mongolab.com:59155/sdone-todolist'
    }
};
