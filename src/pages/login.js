import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Alert,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {
	setSessionTicket,
	setUser,
	handleErrorAlert
} from '@kodabug/common';

import {
	UserService
} from '@kodabug/services'

import style from '@kodabug/style/login';

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			userPassword: ""
		}
	}

	loginUser() {
		let user = {
			usid: this.state.userName,
			pass: this.state.userPassword
		};
		if (user.usid !== '' && user.pass !== '') {
			UserService.loginUser("loginUser", user.usid, user.pass).then(res => {
				res = res.result;
				setUser(user);
				if (res.username !== -1 && res.password !== -1) {
					setSessionTicket(String(res.session_ticket));
					Actions.Main({type: 'reset'})
				} else {
					handleErrorAlert('invalid_user');
				}
			}, err => {
				handleErrorAlert(err);
			})
		} else {
			handleErrorAlert('null_login_user');
		}
	}

	render() {
		return (
			<View style={style.body}>
				<ScrollView
					style={style.login_container}>
					<View
						style={style.logo_container}>
						<Image
							source={require('@kodabug/images').kodabugPNG}
							style={style.logo}/>
					</View>

					<Text
						style={style.try_text}>try {'{'}</Text>

					<TextInput
						placeholder="Kullanıcı adı || E-posta"
						underlineColorAndroid="transparent"
						value={this.state.userName}
						onChangeText={(value) => this.setState({userName: value})}
						style={style.input}/>

					<TextInput
						placeholder="Şifre"
						underlineColorAndroid="transparent"
						value={this.state.userPassword}
						onChangeText={(value) => this.setState({userPassword: value})}
						style={style.input}/>

					<TouchableOpacity
						onPress={this.loginUser.bind(this)}
						style={style.login_button}>
						<Text
							style={style.login_button_text}>Giriş yap</Text>
					</TouchableOpacity>
					<View
						style={style.catch_text_container}>
						<Text
							style={style.try_text}>{'} catch (e) {'}</Text>

						<TouchableOpacity>
							<Text
								style={style.catch_text}>{'sorun_var(e)'}</Text>
						</TouchableOpacity>

						<Text
							style={style.try_text}>{'}'}</Text>
					</View>


				</ScrollView>
				<View
					style={style.footer}>
					<TouchableOpacity
						style={style.signup}>
						<Text>Hesabın mı yok ?</Text>
							<TouchableOpacity
								onPress={() => Actions.Register()}>
								<Text
									style={style.signup_text}>{'kaydol()'}</Text>
							</TouchableOpacity>
						<Text>: goto kodabug</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}
