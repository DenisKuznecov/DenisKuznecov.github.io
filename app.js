var app = angular.module('testApp', ['ngRoute']);

app.config(['$httpProvider', '$routeProvider', '$locationProvider',
  function($httpProvider, $routeProvider, $locationProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/categories', {
        templateUrl: 'app-templates/category.html',
        controller: 'CategoryController'
      })
      .when('/priority', {
        templateUrl: 'app-templates/priority.html',
        controller: 'PriorityController'
      })
      .when('/tasks', {
        templateUrl: 'app-templates/tasks.html',
        controller: 'TasksController'
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  }
]);
