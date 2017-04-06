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
				<ScrollView
					style={style.register_container}>
					<View
						style={style.top_view}>
						<Image
							source={require('../../assets/images/kodabug.png')}
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

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('register'));
