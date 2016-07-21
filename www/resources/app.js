var KodaBugApp = angular.module('kodabug', ['ionic']);

KodaBugApp.run(function($ionicPlatform) {
  	$ionicPlatform.ready(function() {
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	      	cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if(window.StatusBar) {
	      	StatusBar.styleDefault();
	    }
  	});
});

KodaBugApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url : '/app',
			abstract : true,
			templateUrl : 'view/app.html',
			controller : 'MainController'
		})
		.state('app.dash', {
			url : '/dash',
			templateUrl : 'view/dash.html',
			controller : 'MainController'
		})
		.state('app.login', {
			url : '/login',
			templateUrl : 'view/login.html',
			controller : 'LoginController'
		});
	$urlRouterProvider.otherwise('app/login');
});