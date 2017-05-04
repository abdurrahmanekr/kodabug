import './globals';

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	StatusBar,
	View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

import Start from './pages/start/start';
import Login from './pages/login/login';
import Main from './pages/main/main';
import Register from './pages/register/register';
import SendGame from './pages/main/tabs/contributions-tab/send-game';
import {setCustomText} from 'react-native-global-props';

import GameQuestionMain from './pages/game-question-main/game-question-main'
import GameQuestionLose from './pages/game-question-lose/game-question-lose'
import GameQuestionWin from './pages/game-question-win/game-question-win'

export default class kodabug extends Component {
	render() {
		const scenes = Actions.create(
			<Scene key="root">
				<Scene key="Start" component={Start} hideNavBar={true}/>
				<Scene key="Main" component={Main} hideNavBar={true}/>
				<Scene key="Login" component={Login} hideNavBar={true}/>
				<Scene key="Register" component={Register} hideNavBar={true}/>
				<Scene key="SendGame" component={SendGame}/>
				<Scene key="GameQuestionMain" component={GameQuestionMain}/>
				<Scene key="GameQuestionLose" component={GameQuestionLose} hideNavBar={true}/>
				<Scene key="GameQuestionWin" component={GameQuestionWin} hideNavBar={true}/>
			</Scene>
		);

		const style = StyleSheet.create({
			navBar: {
				backgroundColor: '#ff843c',
				borderBottomWidth: 0
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
	fontFamily: 'OpenSans-Regular'
  }
}
setCustomText(customTextProps);

AppRegistry.registerComponent('kodabug', () => kodabug);
