"use strict";

KodaBugApp.service('AjaxService', function ($http, $httpParamSerializerJQLike) {
	var login = function (data) {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var promise = $http(common.ws({
			service: "UserService",
			method: "loginUser",
			data: {
				usid: data.name,
				uspw: data.password
			}
		}))
		.success(function(res) {
			console.log(res);
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