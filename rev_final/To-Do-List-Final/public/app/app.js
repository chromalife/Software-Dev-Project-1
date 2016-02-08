var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/app/home/_home.html',
            controller: 'HomeCtrl'
        })
        .state('todo', {
            url: '/todo',
            templateUrl: '/app/todo/_todo.html',
            controller: 'TodoCtrl'
        });
});