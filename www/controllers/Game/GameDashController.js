"use strict";

KodaBugApp.controller('GameDashController', function ($scope, $state, GameService) {
	$scope.game = {
		title: ""
	};

	$scope.newGame = function() {
		GameService.getRandomGame().then(function(res) {
	        res = res.id;
			$state.go("game.main.play", {gameId: res});
		});
	};
});