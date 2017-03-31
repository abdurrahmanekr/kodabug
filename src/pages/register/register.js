import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Alert
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
	RegisterService
} from '../../services/'


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

	registerUser(){
		RegisterService.registerUser("register", this.state.usname, this.state.surname, this.state.usmail, this.state.password, this.state.birth)
		.then((res) => {
			if(res.result.exist != "1" && res.result.session_ticket){
				Alert.alert("Kayıt başarılı!");
				Actions.pop();
			}else{
				Alert.alert("Mail adresi kullanılmakta.");
			}
		});
	}

	render(){
		return(
			<View style={style.body}>
				<TextInput
					placeholder="Ad"
					value={this.state.usname}
					onChangeText={(value) => this.setState({usname: value})}/>

				<TextInput
					placeholder="Soyad"
					value={this.state.surname}
					onChangeText={(value) => this.setState({surname: value})}/>

				<TextInput
					placeholder="Mail adresi"
					value={this.state.usmail}
					onChangeText={(value) => this.setState({usmail: value})}/>

				<TextInput
					placeholder="Şifre"
					value={this.state.password}
					onChangeText={(value) => this.setState({password: value})}/>

				<TextInput
					placeholder="Doğum tarihi"
					value={this.state.birth}
					onChangeText={(value) => this.setState({birth: value})}/>

				<Button onPress={this.registerUser.bind(this)} title="Kaydı tamamla"/>
			</View>
		)
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('register'));
