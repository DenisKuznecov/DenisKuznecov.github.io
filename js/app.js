var app = angular.module('testApp', ['ngRoute']);

app.config(['$httpProvider', '$routeProvider', '$locationProvider',
  function($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/categories', {
        templateUrl: '../templates/category.html',
        controller: 'CategoryController'
      })
      .when('/priority', {
        templateUrl: '../templates/priority.html',
        controller: 'PriorityController'
      })
      .when('/tasks', {
        templateUrl: '../templates/tasks.html',
        controller: 'TasksController'
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  }
]);
