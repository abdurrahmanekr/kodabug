"use strict";

KodaBugApp.service('AjaxService', function ($http, $httpParamSerializerJQLike) {
	var login = function (data) {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var promise = $http.post(GLOBAL.serviceUrl + "login.php", $httpParamSerializerJQLike(data)).then(function (response) {
			return response.data;
		} , function (response) {
			return response.data;
		})

		return promise;
	};

	var send = function (data, url) {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var promise = $http.post(GLOBAL.serviceUrl + url, $httpParamSerializerJQLike(data)).then(function (response) {
			return response.data;
		} , function (response) {
			return response.data;
		})

		return promise;
	};

	return {
		login: login,
		send: send
	};
});