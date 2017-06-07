import './globals';

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	StatusBar,
	View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

import {
	Start,
	Login,
	Main,
	Register,
	GameQuestionMain,
	GameQuestionLose,
	GameQuestionWin,
	Settings
} from '@kodabug/pages';

import {
	SendGame,
	SettingProfile,
	SettingAccount
} from '@kodabug/tabs';

import {setCustomText} from 'react-native-global-props';

export default class kodabug extends Component {
	render() {
		const scenes = Actions.create(
			<Scene key="root">
				<Scene key="Start" component={Start} hideNavBar={true}/>
				<Scene key="Main" component={Main} hideNavBar={true}/>
				<Scene key="Login" component={Login} hideNavBar={true}/>
				<Scene key="Register" component={Register} hideNavBar={false} title="Kayıt Ol"/>
				<Scene key="SendGame" component={SendGame} hideNavBar={false} title="Katkıda Bulun"/>
				<Scene key="GameQuestionMain" component={GameQuestionMain}/>
				<Scene key="GameQuestionLose" component={GameQuestionLose} hideNavBar={true}/>
				<Scene key="GameQuestionWin" component={GameQuestionWin} hideNavBar={true}/>
				<Scene key="Settings" hideNavBar={false} direction='vertical'>
					<Scene key="SettingsMain" component={Settings} title="Ayarlar" />
					<Scene key="SettingProfile" component={SettingProfile} title="Profili Düzenle" />
					<Scene key="SettingAccount" component={SettingAccount} title="Hesabı Düzenle" />
				</Scene>
			</Scene>
		);

		const style = StyleSheet.create({
			navBar: {
				backgroundColor: '#ff843c',
				borderBottomWidth: 0,
				height: 50
			},
			navTitle: {
				color: '#fff'
			},
			barButtonTextStyle: {
				color:'#F16B6F'
			},
			barButtonIconStyle: {
				tintColor:'#FFF'
			},
			loginNavbar: {
				backgroundColor: '#c5e9f9',
				borderBottomWidth: 0
			}
		});

		return (
			<View
				style={{flex: 1}}>
				<StatusBar
					backgroundColor="#d66828"
					barStyle="light-content"/>
				<Router
					scenes={scenes}
					navigationBarStyle={style.navBar}
					sceneStyle={style.sceneStyle}
					titleStyle={style.navTitle}
					barButtonIconStyle={style.barButtonIconStyle}/>
			</View>
		);
	}
}

const customTextProps = {
  style: {
	fontFamily: 'SourceSansPro-Regular'
  }
}
setCustomText(customTextProps);

AppRegistry.registerComponent('kodabug', () => kodabug);
