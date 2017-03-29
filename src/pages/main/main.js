import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>MainPagee</Text>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('main'));
