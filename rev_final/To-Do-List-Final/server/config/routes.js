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

module.exports = exports = initRoutes;
