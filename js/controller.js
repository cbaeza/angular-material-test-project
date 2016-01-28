(function(){
	angular
	.module('app')
	.controller('MyController', [
		'$scope',
		'MyService',
		function($scope, MyService){
			
			$scope.users = MyService.init();
			$scope.menu = [
				{ name:'table', avatar: 'svg-1', selected:false, content: 'table and filters'},
				{ name:'other 1', avatar: 'svg-2', selected:false, content: 'some content 1'},
				{ name:'other 2', avatar: 'svg-3', selected:false, content: 'some content 2'},
				{ name:'other 3', avatar: 'svg-4', selected:false, content: 'some content 3'}
			]
			$scope.selected = $scope.menu[0];

			$scope.init = function(){
				console.log('controller init !!');	
			}

			$scope.toggleList = function(){
				console.log('toggleList');
			}

			$scope.selectItem = function ( item ) {
				$scope.selected = angular.isNumber(item) ? $scope.menu[item] : item;
				console.log($scope.selected)
			}
		}])
}).call(this);