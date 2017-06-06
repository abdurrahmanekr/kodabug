import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {
	List,
	ListItem
} from 'react-native-elements';

import style from '@kodabug/style/settings';

import {
	logOut
} from '@kodabug/common';

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: [
				{
					icon: 'sign-out',
					name: 'Çıkış Yap',
					handler: 'sign-out'
				},
				{
					icon: 'user',
					name: 'Profili Düzenle',
					handler: 'profile-edit'
				}
			]
		};
	}

	componentWillMount() {
		Actions.refresh({
			renderBackButton: () => {
				return (
					<TouchableOpacity
						onPress={() => {
							Actions.pop();
						}}>
						<Icon
							size={30}
							color='white'
							type={'materialize'}
							name='chevron-left' />
					</TouchableOpacity>
				);
			}
		})
	}


	openPage(handler) {
		switch (handler) {
			case 'sign-out':
				logOut().then(() => {
					Actions.Login({type: 'reset'});
				});
				break;
			case 'profile-edit':
				Actions.SettingProfile();
				break;
		}
	}

	render() {
		return (
			<View
				style={style.body}>
				<List
					containerStyle={style.list}>
					{
						this.state.options.map((item, i) => (
							<ListItem
								containerStyle={style.list_view}
								leftIcon={{
									name: item.icon,
									type: 'font-awesome',
									color: '#c1c4c5',
									size: 18
								}}
								key={i}
								hideChevron={true}
								fontFamily={'FontAwesome'}
								title={item.name}
								onPress={() => this.openPage(item.handler)} />
						))
					}
				</List>
			</View>
		);
	}
}
