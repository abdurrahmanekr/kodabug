import React, { Component } from 'react';

import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Alert
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons'; // icon kütüphanesi

import { Kohana } from 'react-native-textinput-effects';

import style from '@kodabug/style/settings';

import {
	RegisterService
} from '@kodabug/services';

export default class SettingAccount extends Component {
	constructor(props) {
		super(props);

		if (GLOBALS.user !== undefined)
			this.state = {
				copo: GLOBALS.user.copo,
				hepo: GLOBALS.user.hepo,
				bugpo: GLOBALS.user.bugpo,
				fipo: GLOBALS.user.fipo,
				keypo: GLOBALS.user.keypo,
				usname: GLOBALS.user.usname,
				username: GLOBALS.user.username,
				surname: GLOBALS.user.surname,
				uspoint: GLOBALS.user.uspoint,
				photo: GLOBALS.user.photo,
				usmail: GLOBALS.user.usmail,
				birth: GLOBALS.user.birth

			};
		else
			this.state = {
				change: false
			};
	}

	componentWillMount() {
		var self = this;
		Actions.refresh({
			renderRightButton: () => {
				return (
					<TouchableOpacity
						style={style.set_profile_save_button}
						onPress={this.save.bind(this)}>
							<Icon
								size={30}
								color='white'
								name='done' />
					</TouchableOpacity>
				);
			},
			renderBackButton: () => {
				return (
					<TouchableOpacity
						onPress={() => {
							if (self.state.change === true)
								Alert.alert(
									'Kaydedilmemiş değişiklikler var',
									'Değişiklikleri iptal etmek istediğinize emin misiniz ?',
									[
										{
											text: 'Vazgeç'
										},
										{
											text: "İptal",
											onPress: () => {Actions.pop()},
											style: 'delete'
										}
									]
								)
							else
								Actions.pop();
						}}
						style={style.set_profile_save_button}>
							<Icon
								size={30}
								color='white'
								name='clear' />
					</TouchableOpacity>
				);
			}
		})
	}

	changeValue(field, value){
		this.state[field] = value;
		this.setState(this.state);
		this.setState({change: true});
	}

	save(){
		var self = this;
		Alert.alert(
			'Değişiklik yapıyorsunuz',
			'Değişiklikleri kaydetmek istediğinize emin misiniz ?',
			[
				{
					text: "Kaydet",
					onPress: () => {
						RegisterService.updateProfile({
							"usname": self.state.usname,
							"usmail": self.state.usmail,
							"birth": self.state.birth
						})
						Actions.pop();
					},
				},
				{
					text: "Vazgeç",
					style: 'delete'
				}
			]
		)
	}

	render() {
		return (
			<View style={style.body}>
				<View
			 		style={style.set_profile_label}>
					<Kohana
						style={{ backgroundColor: '#f9f5ed' }}
						label={'Mail'}
						iconClass={Icon}
						iconName={'mail'}
						iconColor={'#f4d29a'}
						labelStyle={{ color: '#91627b' }}
						inputStyle={{ color: '#91627b' }}
						defaultValue={this.state.usmail}
						onChangeText={(value) => this.changeValue.bind(this)('usmail', value)}/>
				</View>
				<View
			 		style={style.set_profile_label}>
					<Kohana
						style={{ backgroundColor: '#f9f5ed' }}
						label={'Mail'}
						iconClass={Icon}
						iconName={'date-range'}
						iconColor={'#f4d29a'}
						labelStyle={{ color: '#91627b' }}
						inputStyle={{ color: '#91627b' }}
						defaultValue={this.state.birth}
						onChangeText={(value) => this.changeValue.bind(this)('birth', value)}/>
				</View>

			</View>
		);
	}
}
