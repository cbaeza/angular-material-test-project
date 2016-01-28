(function(){
	angular
	.module('app')
	.controller('MyController', [
		'$scope',
		'MyService',
		function($scope, MyService){
			
			$scope.users = MyService.init();
			
			$scope.init = function(){
				console.log('controller init');
			}
		}])
}).call(this);