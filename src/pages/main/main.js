import React, { Component } from 'react';
import {
	Text,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from './tabs/custom-tab-bar';

import ContributionsTab from './tabs/contributions-tab/contributions-tab';
import CommunityTab from './tabs/community-tab/community-tab';
import MainTab from './tabs/main-tab/main-tab';
import GlobalTab from './tabs/global-tab/global-tab';

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
