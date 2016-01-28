(function(){
	angular
		.module('app', [
			'ngMaterial',
			'mdDataTable',
			'ngMdIcons'
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