(function(){
	angular
		.module('app', [
			'ngMaterial',
			'mdDataTable',
			'ngMdIcons'
		])
		.config(
			function($mdIconProvider, $mdThemingProvider) {
				console.log('i am config');
				$mdIconProvider
					.defaultIconSet("./assets/svg/avatars.svg", 128)
					.icon("menu"       , "./assets/svg/menu.svg"        , 24)
					.icon("share"      , "./assets/svg/share.svg"       , 24)
					.icon("google_plus", "./assets/svg/google_plus.svg" , 512)
					.icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
					.icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
					.icon("phone"      , "./assets/svg/phone.svg"       , 512);

				$mdThemingProvider.theme('default')
					.primaryPalette('indigo');
					//.accentPalette('orange');        	      
			}
		).run(
			function() {
				console.log('i am runing');
			}
		)
}).call(this);	