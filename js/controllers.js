// This is my Settings Service for save or load items from Localstorage
app.service('SettingsService', 
  function() {
    this.categories = JSON.parse(localStorage.getItem('categories')) || [];
    this.saveCategory = function(categories) {
      localStorage.setItem('categories', angular.toJson(categories));
    };
    this.priorities = JSON.parse(localStorage.getItem('priorities')) || [];
    this.savePriority = function(priorities) {
      localStorage.setItem('priorities', angular.toJson(priorities));
    };
  });
// This is my Tasks Service for save or load items from Localstorage
app.service('TasksService', 
  function() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.saveTodo = function(todos) {
      localStorage.setItem('todos', angular.toJson(todos));
      this.todos = todos;
    };
  });
// This is my Category Controller
app.controller('CategoryController', ['$scope', '$route', '$routeParams', 'SettingsService',
  function($scope, $route, $routeParams, SettingsService) {
    $scope.categories = SettingsService.categories;
    // This function removes one of categories 
    $scope.deleteCategory = function(category) {
      if (category.name !== 'Family' && category.name !== 'Work' && category.name !== 'Weekend') {
       var index = $scope.categories.indexOf(category);
       $scope.categories.splice(index, 1);
     }
     SettingsService.saveCategory($scope.categories);
   };
   
   $scope.addCategory = function() {
    if ($scope.formCategoryName.length) {
      $scope.categories.push({name: $scope.formCategoryName});
    }
    $scope.formCategoryName = "";
    SettingsService.saveCategory($scope.categories);
  };
}
]);
// This is my Priority Controller
app.controller('PriorityController', ['$scope', '$route', '$routeParams', 'SettingsService',
  function($scope, $route, $routeParams, SettingsService) {
    $scope.priorities = SettingsService.priorities;
    // This function removes one of priorities 
    $scope.deletePriority = function(priority) {
      if (priority.name !== 'Family' && priority.name !== 'Work' && priority.name !== 'Weekend') {
       var index = $scope.priorities.indexOf(priority);
       $scope.priorities.splice(index, 1);
     }
     SettingsService.savePriority($scope.priorities);
   };
   
   $scope.addPriority = function() {
    if ($scope.formPriorityName.length) {
      $scope.priorities.push({name: $scope.formPriorityName});
    }
    $scope.formPriorityName = "";
    SettingsService.savePriority($scope.priorities);
  };
}
]);
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
    $scope.addTodoRename = function() {
      
        $scope.todos.push({name: $scope.todo.name});
      
      TasksService.saveTodo($scope.todos);
    };

    $scope.saveTasks = function() {
      TasksService.saveTodo($scope.todos);
    };
  } 
  ]);

// TabController
app.controller('TabController', function () {
  this.tab = 1;
  this.setTab = function (tabId) {
    this.tab = tabId;
  };
  this.isSet = function (tabId) {
    return this.tab === tabId;
  };
});