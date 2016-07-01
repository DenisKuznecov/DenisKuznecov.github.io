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