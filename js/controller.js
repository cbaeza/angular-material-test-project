(function(){
	angular
	.module('app')
	.controller('MyController', [
		'$scope',
		'$location',
		'MyService',		
		function($scope, $location, MyService){
			
			$scope.users = MyService.init();
			$scope.menu = [
				{ name:'Carlos Baeza', template:'/test', avatar: 'svg-1', selected:false, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.'},
				{ name:'Javier Martínez', template:'/test2', avatar: 'svg-2', selected:false, content: 'some content 1'},
				{ name:'Franzi', avatar: 'svg-3', template:'/test3', selected:false, content: 'some content 2'},
				{ name:'Franca', avatar: 'svg-4', template:'/test4', selected:false, content: 'some content 3'},
				{ name:'Mateo', avatar: 'svg-5', template:'/test5', selected:false, content: 'some content 4'}
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
				$location.path(item.template);
			}
		}])
}).call(this);