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

KodaBugApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
	$stateProvider
		.state('app', {
			url : '/app',
			abstract : true,
			templateUrl : 'view/app.html'
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
			url : '/game',
			cache: false,
			templateUrl : 'view/game/app.html',
			controller : 'GameController'
		})
		.state('game.main', {
			url : '/main',
			cache: false,
			templateUrl : 'view/game/main.html',
		})
		.state('game.main.dash', {
			url : '/dash',
			views: {
      			'dash': {
					templateUrl : 'view/game/dash.html',
					controller : 'GameDashController',
					cache: false
				}
			}
		})
		.state('game.main.play', {
			url : '/play/:gameId',
			cache: false,
			views: {
      			'play': {
					templateUrl : 'view/game/play.html',
					controller : 'GamePlayController'
				}
			}
		})
		.state('game.main.result', {
			url : '/result',
			views: {
      			'result': {
					templateUrl : 'view/game/result.html',
					controller : 'GameResultController',
					cache: false
				}
			}
		})
		.state('login', {
			url : '/login',
			templateUrl : 'view/login.html',
			controller : 'LoginController'
		});
	$urlRouterProvider.otherwise('/login');
});