(function(){
	angular
		.module('app', [
	  
		])
		.config(
			function() {
				console.log('i am config');
			}
		).run(
			function() {
				console.log('i am runing');
			}
		)
}).call(this);	