import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	WebService
} from '@kodabug/providers';

import {getArgs} from '@kodabug/common';

class RegisterService extends EventEmitter {

	constructor(props) {
		super(props)
	}

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
}


module.exports = new RegisterService();
