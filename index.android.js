import React, { Component } from 'react';
import {
	AppRegistry
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Start from './src/pages/start/start';
import Login from './src/pages/login/login';
import Main from './src/pages/main/main';
import Register from './src/pages/register/register';

export default class kodabug extends Component {
	render() {
		const scenes = Actions.create(
			<Scene key="root">
				<Scene key="Start" component={Start} hideNavBar={true}/>
				<Scene key="Main" component={Main} hideNavBar={true}/>
				<Scene key="Login" component={Login} hideNavBar={true}/>
				<Scene key="Register" component={Register} hideNavBar={false}/>
			</Scene>
		);

		return <Router scenes={scenes}/>
	}
}

AppRegistry.registerComponent('kodabug', () => kodabug);
