(function(){
	angular
	.module('app')
	.controller('MyController', [
		'$scope',
		'MyService',
		function($scope, MyService){
			console.log('controller init');
			$scope.users = MyService.init();
			
			$scope.init = function(){
				
			}
		}])
}).call(this);