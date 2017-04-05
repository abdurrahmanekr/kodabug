import React, { Component } from 'react';
import {
	Text,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from './tabs/custom-tab-bar';

import ContributionsTab from './tabs/contributions-tab/contributions-tab';
import MainTab from './tabs/main-tab/main-tab';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollableTabView renderTabBar={() => <CustomTabBar/>}>
				<MainTab tabLabel="ios-home"/>
				<ContributionsTab tabLabel="ios-git-pull-request-outline"/>
				<Text tabLabel="ios-people">Topluluk</Text>
				<Text tabLabel="ios-keypad">Global Menü</Text>
			</ScrollableTabView>
		);
	}
}
