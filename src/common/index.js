import {
	AsyncStorage,
	Alert
} from 'react-native';

import Config from '../common/config';

export async function isLogin() {
	var session = await AsyncStorage.getItem("session_ticket");
	if (session != null)
		return true;
	return false;
}

export async function setSessionTicket(ticket) {
	AsyncStorage.setItem("session_ticket", ticket);
}

export function deleteSessionTicket(){
	AsyncStorage.removeItem("session_ticket");
}

export function getSessionTicket(){
	return AsyncStorage.getItem('session_ticket');
}

export function encodeServiceData(service, params) {
	return Config.WS_URL + '/' + service + '?data=' + JSON.stringify(params);
}

/*
 * Bu method, fonksiyona verilen argümanların parametresiz alınması ve argümanların
 * kullanılabilir olarak döndürebilmesine yarar.
 * @args: fonksiyon içerisinde `arguments` değeri girilir.
*/

export function getArgs(args){
	return [].slice.apply(args)
}

/*
 * Bu method, argümanların URL yapısındaki `data` tipine çevrilebilmesine yarayan fonksiyon.
 * @method:  serviste kullanılan method girdisi
 * @args: 'getArgs' fonksiyonuna gönderilecek olan `arguments` değeri.
*/

export function argumentsToData(method, args){
	data = Config.init(method);
	args = getArgs(args);
	Object.keys(data).map((objKey, key) => {
		data[objKey] = args[key];
	});
	return data;
}

/*
 * Bu method içine girilen tanımlanmış hatalara göre ekrana uyarı verir
 * @text: standartlaştırılmış hata anahtarı
*/
export function handleErrorAlert(text) {
	switch (text) {
		case 'connection_error':
			Alert.alert('Sunucuya bağlanılamıyor', 'Bağlantı ile ilgili sorun yaşıyoruz, internet bağlantınızı kontrol edin');
			break;
		case 'invalid_username':
			Alert.alert('Kullanıcı adı yanlış!', 'Kullanıcı adınızı doğru girdiğinizden emin olun');
			break;
		case 'invalid_user':
			Alert.alert('Girdiğiniz kullanıcı bilgileri yanlış!', 'Kullanıcı adınızı && şifrenizi doğru girdiğinizden emin olun');
			break;
		case 'null_login_user':
			Alert.alert('Eksik bilgi!', 'Kullanıcı adı || şifre boş bırakılamaz');
			break;
		case 'null_register_user':
			Alert.alert('Eksik bilgi!', 'Kendini null olarak kaydetmek istemezsin!');
			break;
		case 'register_user_exist':
			Alert.alert('Girdiğiniz bazı bilgileri kullanılmış', 'Başka bir e-mail adresi deneyin');
			break;
		case 'invalid_register_user':
			Alert.alert('Girdiğiniz bilgiler geçersiz', 'Bu bilgiler hiç iç açıcı değil');
			break;
		case 'register_user_failed':
			Alert.alert('Kayıt yapılırken bir sorun oluştu', 'Lüfren sonra tekrar deneyiniz');
			break;
		default:
			break;
	}
}
