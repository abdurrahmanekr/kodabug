"use strict";

KodaBugApp.controller('GameController', function($scope, $stateParams, $state, $timeout, $ionicHistory, $animate, GameService, LoadingService) {
    $scope.gameId = $stateParams.gameId;
    
    GameService.getGame($scope.gameId).then(function(res) {

        $scope.game = {
	    	question: $scope.gameId + res.question,
	    	options: res.options,
	    	click: null,
	    	trueOption: null,
            type: {
                class: "game-type-" + res.type,
            }
	    };
        $timeout(function () {
            GameService.highlightingOnLoad();
        })
    });
    $scope.useOption = function (index) {
    	$scope.game.click = index;
    	GameService.getTrueOption($scope.gameId, index).then(function (res) {
    		$scope.game.trueOption = res.trueOption;
    		if (res.win)
    			LoadingService.show("Tebrikler Doğru Cevap !");
    		else 
    			LoadingService.show("Yanlış Cevap Verdin !");
    		$timeout(function() {
    			LoadingService.hide();
    		},2000);
    	});
    };
    $scope.openCoins = function (button) {
    	switch (button) {
    		case "key":
    			break;
			case "fire":
                GameService.getRandomGame().then(function(res) {
                    res = res.id;
                    $state.go("game.main.play", {gameId: res}).then(function() {
                        $ionicHistory.nextViewOptions({
                            disableAnimate: false,
                            disableBack: true
                        });
                    })
                })
				break;
    	}
    }
});