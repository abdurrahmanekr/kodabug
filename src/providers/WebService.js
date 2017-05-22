/*
 * @providesModule @kodabug/providers/web-service
 */

import {
	encodeServiceData,
	getArgs,
	argumentsToData
} from '@kodabug/common'

import Config from '@kodabug/config';

export async function loginUser() {
	let data = argumentsToData('loginUser', arguments);
	let url = encodeServiceData('UserService', data);
	return fetch(url)
	.then(res => res.json())
	.then(res => {
		return res;
	})
	.catch(res => {
		return 'connection_error'
	});
}

export async function registerUser(){
	let data = argumentsToData('register', arguments);
	let url = encodeServiceData('RegisterService', data);
	return fetch(url)
	.then(res => res.json())
	.then(res => {
		return res;
	})
	.catch(res => {
		return 'connection_error'
	});
}

export async function uploadGame(){
	let data = argumentsToData('uploadGame', arguments);
	let url = encodeServiceData('RegisterService', data);
	debugger;
	return fetch(url)
	.then(res => res.json())
	.then(res => {
		return res;
	})
	.catch(res => {
		return 'connection_error'
	});
}

export async function getUserVCard(){
	let data = argumentsToData('getUserVCard', arguments);
	let url = encodeServiceData('UserService', data);
	return fetch(url)
	.then(res => res.json())
	.then(res => {
		return res;
	})
	.catch(res => {
		return 'connection_error'
	});
}

export async function getGameList(){
	let data = argumentsToData('getGameList', arguments);
	let url = encodeServiceData('GameService', data);
	return fetch(url)
	.then(res => res.json())
	.then(res => {
		return res;
	})
	.catch(res => {
		return 'connection_error';
	})
}
