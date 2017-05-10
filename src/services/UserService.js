import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	loginUser,
	getUserVCard
} from '@kodabug/providers/web-service';

import {
	getUser
} from '@kodabug/common';

class UserService extends EventEmitter {

	constructor(props) {
		super(props)
	}

	/*
	 * Kullanıcının gerekli olan bilgilerini getirir
	 * bu method'a this bind edilmelidir
	*/
	loadUserData() {
		var self = this;
		return new Promise((resolve, reject) => {
			getUser().then(user => {
				if (user !== undefined)
					getUserVCard("getUserVCard", GLOBALS.user.name).then(res => {
						resolve(res.result);
					});
				else
					reject();
			})
		})
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

	/*
	 * Bir kullanıcının basit ve sade bir biçimde bilgilerini getirmeyi sağlar.
	 * @usid: kullanıcı adı veya maili
	 * @session_ticket: kullanıcının session_ticket bilgisi
	*/
	async getUserVCard(method, usid, session_ticket) {
		return getUserVCard(method, usid, session_ticket).then(res => {
			return res;
		});
	}
}


module.exports = new UserService();
