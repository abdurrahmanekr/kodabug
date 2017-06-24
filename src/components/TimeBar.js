import React, { Component } from 'react';
import {
	View,
	Animated,
	Easing,
	Text,
	Alert
} from 'react-native';

const {height, width} = require('Dimensions').get('window')

export default class CommunityTab extends Component {
	constructor(props) {
		super(props);

		this.timeout = new Animated.Value(width);
	}

	componentWillMount() {
		var self = this;
		Animated.timing(
		    this.timeout,
		    {
				toValue: 0,
				duration: this.props.width || 20000,
				easing: Easing.linear
		    }
		).start(() => {
			self.props.timeUp && self.props.timeUp();
		});
	}

	render() {
		var color = this.timeout.interpolate({
	        inputRange: [0, width],
	        outputRange: ['red', 'green']
	    });
		return <Animated.View
				style={[
					{
						height: 20,
						width: this.timeout,
						backgroundColor: color
					}
				]}>
			</Animated.View>;
	}
}
