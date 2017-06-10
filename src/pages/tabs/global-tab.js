import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	List,
	ScrollView,
	Alert,
	TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Ionicon from 'react-native-vector-icons/Ionicons'; // icon kütüphanesi

import style from '@kodabug/style/global-tab';

export default class GlobalTab extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	async loadUser() {
		if (GLOBALS.user !== undefined)
			this.setState({
				user: GLOBALS.user
			})
	}

	componentWillMount() {
		var self = this;
		this.loadUser();
		GLOBALS.promise.view.on('refreshUser', () => {
			self.loadUser.bind(this);
		})
	}

	componentWillUnmount() {
		GLOBALS.promise.view.off('refreshUser');
	}

	render() {
		return (
			<View style={style.body}>
				<ScrollView>
					<View
						style={style.top_image}>
						<Image
							source={{
								uri: 'http://www.brautbox.de/local/albums/article1024/hochzeit-in-der-tuerkei_hpv.jpg'
							}}
							style={style.background_image}/>
						<TouchableOpacity
							onPress={() => {
								Actions.Settings();
							}}
							style={style.settingButton}>
							<Ionicon
								name="ios-settings"
								size={40}
								style={style.setting_button}
								color="#ccc"/>
						</TouchableOpacity>
					</View>
					<View
						style={style.profile_card}>
						<View
							style={style.profile_image_container}>
							<Image
								source={this.state.user.photo ? {
									uri: this.state.user.photo
								}: require('@kodabug/images').userPNG}
								style={style.profile_image}/>
						</View>
						<View
							style={style.profile_right_container}>
							<Text
								style={style.user_name}>{this.state.user.usname || 'null'}</Text>
							<Text
								style={style.user_rank_name}>{this.state.user.usrank || 'null'}</Text>
							<View
								style={style.profile_rank_container}>
								<Ionicon
									name="ios-bug"
									size={50}
									color="#ffab2e"/>
								<Text
									style={style.profile_rank_count}>{this.state.user.uspoint || 'null'}</Text>
							</View>
						</View>
					</View>
					<View
						style={style.task_card}>
						<Text style={style.task_card_title}>Görev Kartı - false</Text>
						<View
							style={style.task_card_content}>
							<View style={style.task_card_item}>
								<Text style={style.task_item_header}>(1/30) == 1</Text>
								<Text>Doğru Cevap</Text>
							</View>
							<View style={style.task_card_item}>
								<Text style={style.task_item_header}>(1/10) == 1</Text>
								<Text>Soru Katkısı</Text>
							</View>
						</View>
						<View
							style={style.task_card_content}>
							<View style={style.task_card_item}>
								<Text style={style.task_item_header}>Görev Kartı Ödülü</Text>
								<Text style={style.task_item_header}>10 BUG, 10 RAM</Text>
							</View>
						</View>

					</View>
				</ScrollView>
			</View>
		);
	}
}
