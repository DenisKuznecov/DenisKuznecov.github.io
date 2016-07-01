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