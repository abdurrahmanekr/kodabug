import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Alert,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {
	RegisterService
} from '@kodabug/services'

import {
	handleErrorAlert,
	setSessionTicket,
	setUser
} from '@kodabug/common';

import style from '@kodabug/style/register';

export default class Register extends Component{
	constructor(props){
		super(props);
		this.state = {
			usname: "",
			surname: "",
			usmail: "",
			password: "",
			birth: "",
			text: ''
		}
	}

	registerUser() {
		if (this.state.usname !== '' &&
			this.state.surname !== '' &&
			this.state.usmail !== ''  &&
			this.state.password !== '' &&
			this.state.birth !== '') {
			RegisterService.registerUser({
				usname: this.state.usname,
				surname: this.state.surname,
				usmail: this.state.usmail,
				password: this.state.password,
				birth: this.state.birth,
			}).then(res => {
				if (res.result === -1)
					handleErrorAlert('invalid_register_user')
				else if (res.result.exist === 1)
					handleErrorAlert('register_user_exist')
				else {
					Alert.alert("Kayıt başarılı!");
					setSessionTicket(String(res.result.session_ticket));
					setUser({
						usid: this.state.usmail,
						usname: this.state.usname,
						surname: this.state.surname,
					});
					Actions.Main({type: 'reset'});
				}
			}, err => {
				handleErrorAlert('register_user_failed')
			});
		} else {
			handleErrorAlert('null_register_user')
		}
	}

	render(){
		return(
			<View style={style.body}>
				<ScrollView
					style={style.register_container}>
					<View
						style={style.top_view}>
						<Image
							source={require('@kodabug/images').kodabugPNG}
							style={style.logo}/>
						<Text
							style={style.logo_text}>
							insert into users values (
						</Text>
					</View>

					<TextInput
						placeholder="Ad"
						underlineColorAndroid="transparent"
						value={this.state.usname}
						onChangeText={(value) => this.setState({usname: value})}
						style={style.input}/>

					<TextInput
						placeholder="Soyad"
						underlineColorAndroid="transparent"
						value={this.state.surname}
						onChangeText={(value) => this.setState({surname: value})}
						style={style.input}/>

					<TextInput
						placeholder="Mail adresi"
						underlineColorAndroid="transparent"
						value={this.state.usmail}
						onChangeText={(value) => this.setState({usmail: value})}
						style={style.input}/>

					<TextInput
						placeholder="Şifre"
						underlineColorAndroid="transparent"
						value={this.state.password}
						onChangeText={(value) => this.setState({password: value})}
						style={style.input}/>

					<TextInput
						placeholder="Doğum tarihi"
						underlineColorAndroid="transparent"
						value={this.state.birth}
						onChangeText={(value) => this.setState({birth: value})}
						style={style.input}/>

					<TouchableOpacity
						onPress={this.registerUser.bind(this)}
							style={style.register_button}>
						<Text
							style={style.register_button_text}>) Kayıt Ol</Text>
					</TouchableOpacity>
				</ScrollView>
				<View
					style={style.footer}>
					<TouchableOpacity
						style={style.helpdesk}>
						<Text>Bir sorun mu yaşıyorsun ?</Text>
							<TouchableOpacity>
								<Text
									style={style.helpdesk_text}>{'yardım_masasi()'}</Text>
							</TouchableOpacity>
						<Text>: null</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
