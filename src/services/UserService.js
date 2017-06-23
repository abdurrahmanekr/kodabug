import {
	WebService
} from '@kodabug/providers';

import {
	getUser,
	setUser
} from '@kodabug/common';

class UserService {
	/*
	 * Kullanıcının gerekli olan bilgilerini getirir
	 * bu method'a this bind edilmelidir
	*/
	loadUserData() {
		var self = this;
		return new Promise((resolve, reject) => {
			getUser().then(user => {
				if (user !== undefined)
					self.getUserVCard({ usid: GLOBALS.user.usid }).then(res => {
						if (res.result != -1)
							setUser(res.result);
						resolve(res.result);
						GLOBALS.promise.view.emit('refreshUser');
					});
				else
					reject();
			})
		})
	}

	/*
	 * Bu method kullancının giriş yapmasını sağlar
	 * @usname: kullanıcı adı
	 * @password: kullanıcı şifresi
	*/
	async loginUser(data) {
		return WebService.loginUser(data)
	}

	/*
	 * Bir kullanıcının basit ve sade bir biçimde bilgilerini getirmeyi sağlar.
	 * @usid: kullanıcı adı veya maili
	 * @session_ticket: kullanıcının session_ticket bilgisi
	*/
	async getUserVCard(data) {
		return WebService.getUserVCard(data)
	}
}


module.exports = new UserService();
