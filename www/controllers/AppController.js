"use strict";

KodaBugApp.controller('AppController', function ($scope, $rootScope, WebService) {
    WebService.getUserVCard(GLOBAL.user.usid).then(function(res) {
    	$rootScope.myUser = res;
    	GLOBAL.user = res;
    });
});