var angular = require('angular.min.js');
var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world! from scopetest';
  
  $scope.post = [
	{title: 'post 1', upvotes: 5},
	{title: 'post 2', upvotes: 2},
	{title: 'post 3', upvotes: 15},
	{title: 'post 4', upvotes: 9},
	{title: 'post 5', upvotes: 4}
  ];
  
  $scope.addPost = function() {
	  if ($scope.title === '') { return; }
	  $scope.posts.push({title: $scope.title, upvotes: 0});
	  $scope.title = '';
  };
}]);

app.listen(3000);