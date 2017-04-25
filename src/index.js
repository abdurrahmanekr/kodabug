import './globals';

import React, { Component } from 'react';
import {
	AppRegistry
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Start from './pages/start/start';
import Login from './pages/login/login';
import Main from './pages/main/main';
import Register from './pages/register/register';
import SendGame from './pages/main/tabs/contributions-tab/send-game';
import {setCustomText} from 'react-native-global-props';


export default class kodabug extends Component {
	render() {
		const scenes = Actions.create(
		  <Scene key="root">
			<Scene key="Start" component={Start} hideNavBar={true}/>
			<Scene key="Main" component={Main} hideNavBar={true}/>
			<Scene key="Login" component={Login} hideNavBar={true}/>
			<Scene key="Register" component={Register} hideNavBar={true}/>
		    <Scene key="SendGame" component={SendGame}/>
		  </Scene>
		);

		return <Router scenes={scenes}/>
	}
}

const customTextProps = {
  style: {
    fontFamily: 'OpenSans-Regular'
  }
}
setCustomText(customTextProps);

AppRegistry.registerComponent('kodabug', () => kodabug);