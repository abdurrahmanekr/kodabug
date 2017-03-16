import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Start extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={style.body}>
				<ActivityIndicator
					animating={true}
					style={style.loading}
					size="large"/>
				<Text>Burasını yönlendirmen gerekir :D bekleme boşuna :D</Text>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('start'));
