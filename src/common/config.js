/*
 * @providesModule @kodabug/config
 */

class Config {
	constructor() {
		this.default();
	}

	default() {
		this.WS_URL =  "http://api.kodabug.net/service",
		// this.WS_URL =  "http://192.168.1.100/kodabug/service",
		this.datas = {
			uploadGame: {
				method: "",
				question_name: "",
				question_type: "",
				question_option: "",
				question_true: "0",
				session_ticket: ""
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
		};
	}

	init(x){
		return this.datas[x];
	}
}

module.exports = new Config();
