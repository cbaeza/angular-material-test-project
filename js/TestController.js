(function(){
	angular
	.module('app')
	.controller('TestCtrl', [
		'$scope',
		'MyService',
		function($scope, MyService){
			console.log('TestCtrl init !!');	
			
		}])
}).call(this);