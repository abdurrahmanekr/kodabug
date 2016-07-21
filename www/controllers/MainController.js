"use strict";

KodaBugApp.controller('MainController', function ($scope, $state, $ionicHistory) {
	$scope.logout = function () {
		$state.go("app.login");
		$ionicHistory.clearHistory();
	}
});