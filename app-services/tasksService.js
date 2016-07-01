// This is my Tasks Service for save or load items from Localstorage
app.service('TasksService', 
	function() {
		this.todos = JSON.parse(localStorage.getItem('todos')) || [];
		this.saveTodo = function(todos) {
			localStorage.setItem('todos', angular.toJson(todos));
			this.todos = todos;
		};
	});