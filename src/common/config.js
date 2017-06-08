/*
 * @providesModule @kodabug/config
 */

class Config {
	constructor() {
		this.default();
	}

	default() {
		this.WS_URL =  "http://api.kodabug.net/service";
		// this.WS_URL =  "http://192.168.1.101/kodabug/service";
	}
}

module.exports = new Config();
