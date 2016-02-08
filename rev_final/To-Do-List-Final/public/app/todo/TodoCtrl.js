(function() {
    'use strict';

    function TodoCtrl($scope, TodoSvc) {

        $scope.Todolist = [];

        $scope.getItems = function() {
            TodoSvc.getItems().then(function (response) {
                console.log(response.data);
                $scope.Todolist = angular.copy(response.data);
            }, function (err) {
                console.log(err.toString());
            });
        };
        $scope.getItems();

        $scope.newItem = {
            name: '',
            description: ''
        };

        $scope.selected = false;

        $scope.activeItem = null;

        $scope.changeView = function(id) {
            for(var i = 0; i < $scope.Todolist.length; i++) {
                if($scope.Todolist[i]._id == id)
                    $scope.activeItem = $scope.Todolist[i];
            }
        };

        $scope.activeState = '';

        $scope.addTodo = function() {
            $scope.activeState = 'new';
        };

        $scope.saveNewItem = function(newItem) {
            TodoSvc.saveItem(newItem).then(function(response) {
                $scope.activeState = '';
                $scope.getItems();
            }, function(err) {
                console.log(err);
            });
        };

        $scope.cancelNewItem = function() {
            $scope.newItem.name = '';
            $scope.newItem.description = '';
        };

        $scope.tempItem = null;

        $scope.editItem = function(activeItem) {
            $scope.tempItem = angular.copy(activeItem);
            $scope.activeState = 'edit';
        };

        $scope.updateItem = function(item) {
            TodoSvc.updateItem(item).then(function(response) {
                $scope.getItems();
                $scope.activeState = '';
            }, function(err) {
                console.log(err);
            })
        };

        $scope.cancelUpdateItem = function() {
            $scope.tempItem = null;
            $scope.activeState = '';
        };

        $scope.deleteItem = function(item) {
            TodoSvc.deleteItem(item).then(function(response) {
                $scope.getItems();
                $scope.activeState = '';
            }, function(err) {
                console.log(err.toString());
            });
        }
    }

    angular.module('app').controller('TodoCtrl', TodoCtrl);
})();