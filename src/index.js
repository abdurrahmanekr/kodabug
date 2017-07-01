import './globals';

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	StatusBar,
	View,
	Platform
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
	GameQuestionChallenge,
	Settings
} from '@kodabug/pages';

import {
	SendGame,
	SettingProfile,
	SettingPassword
} from '@kodabug/tabs';

import {setCustomText} from 'react-native-global-props';

export default class kodabug extends Component {
	render() {
		const scenes = Actions.create(
			<Scene key="root">
				<Scene key="Start" component={Start} hideNavBar={true} duration={0}/>
				<Scene key="Main" component={Main} hideNavBar={true} duration={0}/>
				<Scene key="Login" component={Login} hideNavBar={true} duration={0}/>
				<Scene key="Register" component={Register} hideNavBar={false} title="Kayıt Ol" duration={0}/>
				<Scene key="SendGame" component={SendGame} hideNavBar={false} title="Katkıda Bulun" duration={0}/>
				<Scene key="GameQuestionMain" component={GameQuestionMain} hideNavBar={true} duration={0}/>
				<Scene key="GameQuestionLose" component={GameQuestionLose} hideNavBar={true} duration={0}/>
				<Scene key="GameQuestionWin" component={GameQuestionWin} hideNavBar={true} duration={0}/>
				<Scene key="GameQuestionChallenge" component={GameQuestionChallenge} hideNavBar={false} duration={0}/>
				<Scene key="Settings" hideNavBar={false} duration={0}>
					<Scene key="SettingsMain" component={Settings} title="Ayarlar" duration={0} />
					<Scene key="SettingProfile" component={SettingProfile} title="Profili Düzenle" duration={0} />
					<Scene key="SettingPassword" component={SettingPassword} title="Hesabı Düzenle" duration={0} />
				</Scene>
			</Scene>
		);

		const style = StyleSheet.create({
			navBar: {
				backgroundColor: '#ff843c',
				borderBottomWidth: 0,
				...Platform.select({
					android: {
						height: 50,
					},
					ios: {
						height: 64,
					}
				})
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

// const customTextProps = {
//   style: {
// 	fontFamily: 'SourceSansPro-Regular'
//   }
// }
// setCustomText(customTextProps);

AppRegistry.registerComponent('kodabug', () => kodabug);
