var config = require('./config');
var TodoItemCtrl = require('../controllers/TodoItemCtrl');

function getIndex(req, res) {
	res.sendFile(config.rootPath + 'server/views/index.html');
}

function initRoutes(app) {

	app.get('/', getIndex);

	app.get('/api/item', TodoItemCtrl.getTodoItems);
	app.post('/api/item/new', TodoItemCtrl.saveTodoItem);
	app.post('/api/item/update', TodoItemCtrl.updateTodoItem);
	app.post('/api/item/delete', TodoItemCtrl.deleteTodoItem);
}
var uuid = require('uuid'); // https://github.com/defunctzombie/node-uuid
var multiparty = require('multiparty'); // https://github.com/andrewrk/node-multiparty
var s3 = require('s3'); // https://github.com/andrewrk/node-s3-client

var s3Client = s3.createClient({
	key: '<your_key>',
	secret: '<your_secret>',
	bucket: '<your_bucket>'
});

module.exports = function(app){
	app.post('/api/v1/upload/image', function(req,res){
		var from = new multiparty.Form();
		var file = files.file[0];
		var contentType = file.headers['content-type'];
		var extension = file.path.substring(file.path.lastIndexOf('.'));
		var destPath = '/' + user.id + '/profile' + '/' + uuid.v4 + extension;
		
		var headers = {
			'x-amz-acl': 'public-read',
			'Content-Length': file.size,
			'Content-Type': contentType
		};
		
		var uploader = s3Client.upload(file.path, destPath, headers);
		
		uploader.on('error', function(err){
			alert("Looks like you broke it.")
		});
		
		uploader.on('end', function(url){
			console.log('file opened:', url);
		});
	});
}

module.exports = exports = initRoutes;
