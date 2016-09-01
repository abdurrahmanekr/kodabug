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
		.state('app.main', {
			url : '/main',
			templateUrl : 'view/main.html',
			controller : 'MainController'
		})
		.state('app.friends', {
			url : '/friends',
			templateUrl : 'view/friends.html',
			controller : 'FriendsController'
		})
		.state('app.profile', {
			url : '/profile/:usId',
			cache: false,
			templateUrl : 'view/profile.html',
			controller : 'ProfileController'
		})
		
		//----------------------------------

		.state('game', {
			url : '/game/:gameId',
			cache: false,
			templateUrl : 'view/game.html',
			controller : 'GameController'
		})
		.state('login', {
			url : '/login',
			templateUrl : 'view/login.html',
			controller : 'LoginController'
		});
	$urlRouterProvider.otherwise('/login');
});