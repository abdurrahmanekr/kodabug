import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={style.body}>
				<Text>selamun aleyküm hocam</Text>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('main'));
