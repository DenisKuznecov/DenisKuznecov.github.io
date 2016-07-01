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