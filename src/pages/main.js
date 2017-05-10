import React, { Component } from 'react';
import {
	Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
	CustomTabBar,
	ContributionsTab,
	CommunityTab,
	MainTab,
	GlobalTab
} from '@kodabug/tabs';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollableTabView renderTabBar={() => <CustomTabBar/>}>
				<MainTab tabLabel="ios-home"/>
				<ContributionsTab tabLabel="ios-git-pull-request-outline"/>
				<CommunityTab tabLabel="ios-people"></CommunityTab>
				<GlobalTab tabLabel="ios-keypad"></GlobalTab>
			</ScrollableTabView>
		);
	}
}
