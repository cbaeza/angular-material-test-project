(function(){
	angular
	.module('app')
	.service('MyService', [
		function(){
			
			var data = [];
			
			this.init = function(){
				console.log('service init');
				for(var i=0; i<= 100; i++){
					data.push({ 'userId':i, 'name': 'Max Musterman_'+i, 'email': 'max@musterman.com' });
				}
				return data;
			}

		}])
}).call(this);