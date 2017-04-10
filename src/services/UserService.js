import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	loginUser
} from '../providers/WebService';

class UserService extends EventEmitter {

	constructor(props) {
		super(props)
	}

	/*
	 * Bu method kullancının giriş yapmasını sağlar
	 * @name: kullanıcı adı
	 * @pass: kullanıcı şifresi
	*/
	async loginUser(method, name, pass) {
		return new Promise((resolve, reject) => {
			loginUser(method, name, pass).then(res => {
				if (res === 'connection_error') {
					reject(res);
					return;
				}
				resolve(res);
			})
		})
	}
}


module.exports = new UserService();
