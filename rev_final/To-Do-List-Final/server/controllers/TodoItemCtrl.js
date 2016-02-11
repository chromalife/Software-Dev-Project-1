var util = require('util');
var TodoItem = require('../models/TodoItem');

function getTodoItems(req, res) {
    TodoItem.find({}, function(err, items) {
        if(err) {
            util.log(err.toString());
            res.status(500).json({ err: err.toString() });
        }
        res.status(200).json(items);
    })
}

function saveTodoItem(req, res) {

    var newUser = TodoItem({
        name: req.body.name,
        description: req.body.description
    });

    newUser.save(function(err) {
        if(err) {
            util.log(err.toString());
            res.status(500).json({ success: false });
        }
        res.status(200).json({ success: true });
    });
}

function updateTodoItem(req, res) {
    TodoItem.findOneAndUpdate(req.body._id, { name: req.body.name, description: req.body.description }, function(err, item) {
        if(err) {
            util.log(err.toString());
            res.status(500).json({ error: err.toString() });
        }

        res.status(200).json(item);
    });
}

function deleteTodoItem(req, res) {
    TodoItem.find({ _id: req.body._id }).remove().exec();
}

$scope.onFileSelect = function(image){
	$scope.uploadInProgress = true;
	$scope.uploadProgress = 0;
	
	if(angular.isArray(image)){
		image = image[0];
	}
	
	$scope.upload = $upload.upload({
		url:'/api/v1/upload/image',
		method: 'POST',
		data: {
			type:'profile'
		},
		file: image
	}).progress(function(event){
		$scope.uploadProgress = Math.floor(event.loaded / event.total);
		$scope.$apply();
	}).success(function(data, status, header, config){
		AlertService.success('Photo Uploaded!');
	}).error(function(err){
		$scope.uploadInProgress = false;
		AlertService.error('Error uploading file: ' + err.message || err); 
	});
};


module.exports.getTodoItems   = exports.getTodoItems   = getTodoItems;
module.exports.saveTodoItem   = exports.saveTodoItem   = saveTodoItem;
module.exports.updateTodoItem = exports.updateTodoItem = updateTodoItem;
module.exports.deleteItem     = exports.deleteTodoItem = deleteTodoItem;