import {
	encodeServiceData
} from '../common/index'

export async function loginUser (name, pass) {
	var data = {
		method: 'loginUser',
		usname: name,
		password: pass
	};

	let url = encodeServiceData('UserService', data);
	return fetch(url)
	.then((res) => res.json())
	.then((res) => {
		return res;
	});
}
