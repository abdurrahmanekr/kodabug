import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Alert,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {setSessionTicket} from '../../common/index';

import {
	UserService
} from '../../services/'

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			userPassword: ""
		}
	}

	loginUser(){
		UserService.loginUser("loginUser", this.state.userName, this.state.userPassword).then(res => {
			if(res.result.username != "-1" && res.result.password != "-1"){
				Actions.Main({type: 'reset'})
				setSessionTicket(String(res.result.session_ticket));
			}else{
				Alert.alert("hayır!");
			}
		})
	}

	render() {
		return (
			<View style={style.body}>
				<TextInput
					placeholder="Kullanıcı adı"
					value={this.state.userName}
					onChangeText={(value) => this.setState({userName: value})}/>

				<TextInput
					placeholder="Şifre"
					value={this.state.userPassword}
					onChangeText={(value) => this.setState({userPassword: value})}/>

				<Button onPress={this.loginUser.bind(this)} title="Giriş yap"/>

				<TouchableOpacity style={style.signup} onPress={() => Actions.Register()}>
					<Text style={{fontSize: 14, color: "#3498db"}}>Kayıt ol</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('login'));
