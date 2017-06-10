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

		// en fazla soru bekleme süresi
		this.MAX_GAME_TIMEOUT = 20000;
	}
}

module.exports = new Config();
