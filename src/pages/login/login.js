import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={style.body}>
				<Text>login</Text>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('login'));
