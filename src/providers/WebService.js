/*
 * @providesModule @kodabug/providers/web-service
 */

import {
	sendGET,
	sendPOST
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

	async updateProfile(data) {
		return sendGET('RegisterService', 'updateProfile', data)
	}

	async updateProfilePhoto(data, body){
		return sendPOST('RegisterService', 'updateProfile', data, body)
	}

	async startGame(data) {
		return sendGET('GameService', 'startGame', data)
	}
}

module.exports = new WebService();
