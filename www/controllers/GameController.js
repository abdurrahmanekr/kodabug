"use strict";

KodaBugApp.controller('GameController', function($scope, $rootScope, $stateParams, $state, $timeout, $ionicHistory, $animate, GameService, LoadingService, PopupService) {
    $scope.gameId = $stateParams.gameId;
    
    GameService.getGame($scope.gameId).then(function(res) {

        $scope.game = {
	    	question: $scope.gameId + res.question,
	    	options: res.options,
	    	click: null,
	    	trueOption: null,
            type: {
                class: "game-type-" + res.type,
            },
            time: 16
	    };
        $timeout(function () {
            GameService.highlightingOnLoad();
        });
        $scope.timer = function() {
            $scope.game.time--;
            if ($scope.game.time != 0)
                $timeout(function() {
                    $scope.timer();
                }, 1000);
        };
        $scope.timer();
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
                if (GLOBAL.user.fire > 0)
                    GameService.getRandomGame().then(function(res) {
                        res = res.id;
                        $state.go("game.main.play", { gameId: res }).then(function() {
                            $ionicHistory.nextViewOptions({
                                disableBack: true
                            });
                            $rootScope.myUser.fire = --GLOBAL.user.fire;
                        });
                    });
                else
                    PopupService.open( "Ateşin bitti", "Maalesef atlama yapamazsın :(");
				break;
    	}
    }
});