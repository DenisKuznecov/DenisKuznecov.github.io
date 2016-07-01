app.controller('TasksController', ['$scope', '$route', '$routeParams', 'SettingsService', 'TasksService',
  function($scope, $route, $routeParams, SettingsService, TasksService) {
    $scope.todos = TasksService.todos;
    // This is my colors array which contains background color for todo-wrap class
    $scope.colors = [
    {name: 'red', hex: '#ff3333'},
    {name: 'blue', hex: '#3333ff'},
    {name: 'yellow', hex: '#ffff33'},
    {name: 'green', hex: '#33ff33'},
    {name: 'gray', hex: '#85adad'}
    ];
    $scope.categories = [];
    // This for loop is for checking what's new is in categories array 
    for (i = 0; i < SettingsService.categories.length; i++) {
      $scope.categories.push(SettingsService.categories[i]);
    }
    $scope.categories.push({name: 'Family'}, {name: 'Work'}, {name: 'Weekend'});
    $scope.priorities = [];
    // This for loop is for checking what's new is in priorities array
    for (i = 0; i < SettingsService.priorities.length; i++) {
      $scope.priorities.push(SettingsService.priorities[i]);
    }
    $scope.priorities.push({name: 'Very Important'}, {name: 'Important'}, {name: 'Less important'});
    // This function removes the todo
    $scope.clearCompleted = function() {
      $scope.todos = $scope.todos.filter(function(todo) {
        return !(todo.done === true);
      });
      TasksService.saveTodo($scope.todos);
    };
    // This function adds the todo if inputs are not empty or there are more than 30 letters in it
    $scope.addTodo = function() {
      if ($scope.formTodoName.length > 30 && $scope.formTodoText.length > 30) {
        alert("Hey dude, it's to long");
      } else if ($scope.formTodoName.length && $scope.formTodoText.length) {
        $scope.todos.push({name: $scope.formTodoName, text: $scope.formTodoText, color: $scope.formTodoColor, category: $scope.formTodoCategory, priority: $scope.formTodoPriority, done: false});
      }
      $scope.formTodoName = "";
      $scope.formTodoText = "";
      TasksService.saveTodo($scope.todos);
    };
    $scope.saveTasks = function() {
      TasksService.saveTodo($scope.todos);
    };
  } 
  ]);