/*
 * @providesModule @kodabug/providers/web-service
 */

import {
	sendGET
} from '@kodabug/common'

class WebService {

	/*
	 * Kullanıcının giriş yapmak için kullandığı method
	*/
	async loginUser(data) {
		return sendGET('UserService', 'loginUser', data)
	}

	async registerUser(data) {
		return sendGET('RegisterService', 'register', data)
	}

	async uploadGame(data) {
		return sendGET('RegisterService', 'uploadGame', data)
	}

	async getUserVCard(data){
		return sendGET('UserService', 'getUserVCard', data)
	}

	async getGameList(data) {
		return sendGET('GameService', 'getGameList', data)
	}
}

module.exports = new WebService();
