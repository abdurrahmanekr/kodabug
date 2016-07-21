"use strict";

KodaBugApp.service('AjaxService', function ($http, $httpParamSerializerJQLike) {
	var result = function (data) {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var promise = $http.post(GLOBAL.serviceUrl + "index.php", $httpParamSerializerJQLike(data)).then(function (response) {
			return response.data;
		} , function (response) {
			return false;
		})

		return promise;
	};

	return {
		login : result
	};
});