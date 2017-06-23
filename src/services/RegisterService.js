import {
	WebService
} from '@kodabug/providers';

class RegisterService {

	/*
	 * yeni bir kullanıcı oluşturmayı sağlar.
	 */
	async registerUser(data){
		return WebService.registerUser(data)
	}

	/*
	 * yeni bir oyun oluşturmayı sağlar
	 */
	async uploadGame(data){
		return WebService.uploadGame(data)
	}

	/*
	 * kullanıcının profilini günceller
	*/
	async updateProfile(data) {
		return WebService.updateProfile(data)
	}

	async updateProfilePhoto(data, body) {
		return WebService.updateProfilePhoto(data, body)
	}
}


module.exports = new RegisterService();
