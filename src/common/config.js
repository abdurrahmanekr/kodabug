var _Config = {
	WS_URL: "http://178.62.101.216:1122/service",
	datas: {
		uploadGame: {
			method: "",
			question_name: "",
			question_type: "",
			question_option: "",
			question_true: "",
			session_ticket: "",
			file: ""
		},
		register: {
			method: "",
			usname: "",
			surname: "",
			usmail: "",
			password: "",
			birth: ""
		},
		loginUser: {
			"method": "",
			"usname": "",
			"password": ""
		},
		getUserVCard: {
			"method": "",
			"usid": "",
			"session_ticket": ""
		},
		getGameList : {
			"method": "",
			"session_ticket": ""
		}
	},
	init: function(x){
		return this.datas[x];
	}
}

module.exports = _Config;
