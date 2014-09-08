(function() {
	var taskTracker = angular.module('TaskTracker', []);
	
	taskTracker.controller('NewTask', function(dateFilter) {
		this.task = {};
		this.showErrors = false;
		
		$('input.datepicker').datepicker();
		
		this.taskAdd = function(valid, tasks) {
			this.showErrors = true;
			if( valid ) {
				tasks.unshift(this.task);
				this.task = {};
				this.showErrors = false;
			}
		};
	});
	
	taskTracker.controller('TaskListing', ['$http', function($http) {
		this.tasks = [
          	{
        		"name": "Test Task #1",
        		"date": "12/01/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #2",
        		"date": "12/02/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #3",
        		"date": "12/03/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #4",
        		"date": "12/04/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #5",
        		"date": "12/05/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #6",
        		"date": "12/06/2012",
        		"assigned": "John Doe"
        	},

        	{
        		"name": "Test Task #7",
        		"date": "12/07/2012",
        		"assigned": "John Doe"
        	}
        ];
	}]);

})();
