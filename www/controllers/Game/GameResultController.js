"use strict";

KodaBugApp.controller('GameResultController', function ($scope, $state) {
	$scope.exit = function() {
		$state.go("app.main");
	};

	$scope.next = function() {
		$state.go("game.main.dash");
	};
});