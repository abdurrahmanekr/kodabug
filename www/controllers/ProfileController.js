"use strict";

KodaBugApp.controller('ProfileController', function($scope, $rootScope, $stateParams, WebService) {
	$scope.usId = $stateParams.usId;
	$scope.user = {};
	if ($scope.usId == "me") {
		$scope.user = $rootScope.myUser;
		$scope.user.me = true;
	} else {
		WebService.getUserVCard($scope.usId).then(function(res) {
			$scope.user = res;
		});
	}
});