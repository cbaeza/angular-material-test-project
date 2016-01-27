(function(){
	angular
	.module('app')
	.controller('MyController', [
		'$scope'
		,
		function($scope){
			$scope.users = 100;
			$scope.init = function(){
				console.log('controller init');			
			}
		}])
}).call(this);