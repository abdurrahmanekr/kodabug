import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	List,
	ScrollView,
	Alert
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons'; // icon kütüphanesi
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicon from 'react-native-vector-icons/Octicons';

import style from '@kodabug/style/global-tab';

export default class GlobalTab extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {
				usid: '1',
				usname: 'Diktatör Kodcu',
				uspoint: 100,
				photo: 'https://avatars0.githubusercontent.com/u/15075759'
			}
		};
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
					</View>
					<View
						style={style.profile_card}>
						<View
							style={style.profile_image_container}>
							<Image
								source={{
									uri: this.state.user.photo
								}}
								style={style.profile_image}/>
						</View>
						<View
							style={style.profile_right_container}>
							<Text
								style={style.user_name}>{this.state.user.usname}</Text>
							<Text
								style={style.user_rank_name}>{'Debugger'}</Text>
							<View
								style={style.profile_rank_container}>
								<Ionicon
									name="ios-bug"
									size={50}
									color="#ffab2e"/>
								<Text
									style={style.profile_rank_count}>1500</Text>
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
