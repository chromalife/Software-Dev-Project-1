(function() {
    'use strict';

    function TodoSvc($http) {

        function getItems() {
            return $http.get('/api/item');
        }

        function saveItem(newItem) {
            return $http.post('/api/item/new', newItem);
        }

        function updateItem(item) {
            return $http.post('/api/item/update', item);
        }

        function deleteItem(item) {
            return $http.post('/api/item/delete', item);
        }

        return {
            getItems: getItems,
            saveItem: saveItem,
            updateItem: updateItem,
            deleteItem: deleteItem
        }
    }

    angular.module('app').factory('TodoSvc', TodoSvc);
})();