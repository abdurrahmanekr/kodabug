import React, { Component } from 'react';

import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Alert,
	Platform,
	ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons'; // icon kütüphanesi

import { Kohana } from 'react-native-textinput-effects';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import ImagePicker  from 'react-native-image-picker';

import style from '@kodabug/style/settings';

import {
	RegisterService
} from '@kodabug/services';

export default class SettingProfile extends Component {
	constructor(props) {
		super(props);

		if (GLOBALS.user !== undefined)
			this.state = {
				usname: GLOBALS.user.usname,
				surname: GLOBALS.user.surname,
				username: GLOBALS.user.username,
				usmail: GLOBALS.user.usmail,
				birth: GLOBALS.user.birth,
				photo: GLOBALS.user.photo,
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

	changeValue(field, value) {
		this.state[field] = value;
		this.setState(this.state);
		this.setState({change: true});
	}

	save() {
		var self = this;
		Alert.alert(
			'Değişiklik yapıyorsunuz',
			'Değişiklikleri kaydetmek istediğinize emin misiniz ?',
			[
				{
					text: "Kaydet",
					onPress: () => {
						RegisterService.updateProfile({
							usname: self.state.usname,
							surname: self.state.surname,
							username: self.state.username,
							usmail: self.state.usmail,
							birth: self.state.birth
						}).then(res => {
							this.setState({change: false});
							if (res.result == "1") {
								Alert.alert("Başarılı!", "Bilgileriniz Kaydedildi!");
								GLOBALS.user = {
									usname: self.state.usname,
									surname: self.state.surname,
									username: self.state.username,
									usmail: self.state.usmail,
									birth: self.state.birth,
									...GLOBALS.user
								}
							} else {
								Alert.alert("Başarısız!", "Girdiğiniz değerler kullanılıyor");
							}
						});
						if(self.state.photoForm){
							RegisterService.updateProfilePhoto({}, self.state.photoForm).then(res => {
								this.setState({change: false});
								if(res.result == "1"){
									GLOBALS.user = {
										photo: self.state.photo
									}
								}else{
									this.setState({
										photo: null
									});
								}
							})
						}
					},
				},
				{
					text: 'Vazgeç',
					style: 'delete'
				}
			]
		)
	}

	uploadPhoto() {
		var options = {
			title: 'Fotoğraf seç',
			cancelButtonTitle: 'İptal',
			takePhotoButtonTitle: 'Kameradan fotoğraf çek',
			chooseFromLibraryButtonTitle: 'Galeriden seç',
			cameraType: 'front',
			mediaType: 'photo',
			storageOptions: {
				skipBackup: true,
				path: 'DCIM'
			}
		}

		ImagePicker.showImagePicker(options, (res) => {

			if (res.didCancel) {
				//user did cancel picking image
			} else if (res.error) {
				//error on picking image
			} else {
				let file = new FormData();
				file.append('file', { uri: res.uri, name: res.fileName, type: res.type });
				file.append('Content-Type', 'multipart/form-data');
				this.setState({
					photo: res.uri,
					photoForm: file,
					change: true
				})
			}
		});
	}

	render() {
		return (
			<View
				style={style.body}>
				<ScrollView
					contentContainerStyle={style.set_profile_scroll}>
					<TouchableOpacity onPress={() => this.uploadPhoto()}>
						<Image
							source={this.state.photo ? {
								uri: this.state.photo + "?v=" + Math.random()
							} : require('@kodabug/images').userPNG}
							style={style.set_profile_image}/>
						<Text
							style={style.set_profile_image_text}>
							Resmi Değiştir
						</Text>
					</TouchableOpacity>

					<View
						style={style.set_profile_label}>
						<Kohana
							style={{ backgroundColor: '#f9f5ed' }}
							label={'Ad'}
							iconClass={Icon}
							iconName={'person'}
							iconColor={'#f4d29a'}
							labelStyle={{ color: '#91627b' }}
							inputStyle={{ color: '#91627b' }}
							defaultValue={this.state.usname}
							onChangeText={(value) => this.changeValue.bind(this)('usname', value)}/>
					</View>

					<View
						style={style.set_profile_label}>
						<Kohana
							style={{ backgroundColor: '#f9f5ed' }}
							label={'Soyad'}
							iconClass={Icon}
							iconName={'person'}
							iconColor={'#f4d29a'}
							labelStyle={{ color: '#91627b' }}
							inputStyle={{ color: '#91627b' }}
							defaultValue={this.state.surname}
							onChangeText={(value) => this.changeValue.bind(this)('surname', value)}/>
					</View>

					<View
						style={style.set_profile_label}>
						<Kohana
							style={{ backgroundColor: '#f9f5ed' }}
							label={'Kullanıcı Adı'}
							iconClass={Icon}
							iconName={'person-pin-circle'}
							iconColor={'#f4d29a'}
							labelStyle={{ color: '#91627b' }}
							inputStyle={{ color: '#91627b' }}
							defaultValue={this.state.username}
							onChangeText={(value) => this.changeValue.bind(this)('username', value)}/>
					</View>

					<Text
						style={style.set_profile_divider}>
						Gizlilik Ayarları
					</Text>

					<View
						style={style.set_profile_label}>
						<Kohana
							style={{ backgroundColor: '#f9f5ed' }}
							label={'E-mail'}
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
				</ScrollView>
				{Platform.OS === 'ios' && <KeyboardSpacer/>}
			</View>
		);
	}
}
