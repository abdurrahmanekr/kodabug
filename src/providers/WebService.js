import {
	encodeServiceData,
	getArgs,
	argumentsToData
} from '../common/index'

import Config from '../common/config';

export async function loginUser() {
	let data = argumentsToData('loginUser', arguments);
	let url = encodeServiceData('UserService', data);
	return fetch(url)
	.then((res) => res.json())
	.then((res) => {
		return res;
	});
}

export async function registerUser(){
	let data = argumentsToData('register', arguments);
	let url = encodeServiceData('RegisterService', data);
	return fetch(url)
	.then((res) => res.json())
	.then((res) => {
		return res;
	});
}

export async function uploadGame(){
	let data = argumentsToData('uploadGame', arguments);
	let url = encodeServiceData('RegisterService', data);
	return fetch(url)
	.then((res) => res.json())
	.then((res) => {
		return res;
	})
}
