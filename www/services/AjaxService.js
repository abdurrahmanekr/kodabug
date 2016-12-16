"use strict";

KodaBugApp.service('AjaxService', function ($http, $httpParamSerializerJQLike) {
	return {

		login: function (data) {
			return $http(common.ws({
						service: "UserService",
						method: "loginUser",
						data: {
							usname: data.name,
							password: data.password
						}
					}));
		},

		register: function (data) {
			return $http(common.ws({
						service: "RegisterService",
						method: "register",
						data: {
							usname: data.name,
							surname: data.surname,
							usmail: data.mail,
							password: data.password,
							birth: data.birth
						}
					}));
		}
	}
});