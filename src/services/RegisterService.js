import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	registerUser,
	uploadGame
} from '../providers/WebService';

import {getArgs} from '../common/index';

class RegisterService extends EventEmitter {

	constructor(props) {
		super(props)
	}

	/*
	 * Bu method yeni bir kullanıcı oluşturmayı sağlar.
	 * @method: serviste kullanılan method girdisi
	 * @name: kullanıcı adı
	 * @surname: kullanımı soyadı
	 * @mail: kullanıcı mail adresi
	 * @pass: kullanıcı şifresi
	 * @birth: kullanıcı doğum günü
	 */
	async registerUser(method, name, surname, mail, pass, birth){
		return registerUser(method, name, surname, mail, pass, birth).then(res => {
			return res;
		});
	}

	/*
	 * Bu method yeni bir oyun oluşturmayı sağlar
	 * @method: serviste kullanılan method girdisi
	 * @question_name: soru
	 * @question_type: 1
	 * @question_option: cevapların array tipinde çıktısı
	 * @question_true: doğru cevabın indis değeri
	 * @birth: kullanıcı doğum günü
	 * @session_ticket: kullanıcı session datası
	 */
	async uploadGame(method, question_name, question_type, question_option, question_true, session_ticket, file="multipart/form-data"){
		return uploadGame(method, question_name, question_type, question_option, question_true, session_ticket, file).then(res => {
			return res;
		});
	}
}


module.exports = new RegisterService();
