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

import {UserService} from '../../../../services';
import {getSessionTicket} from '../../../../common';

import Ionicon from 'react-native-vector-icons/Ionicons'; // icon kütüphanesi
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicon from 'react-native-vector-icons/Octicons';

export default class MainTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [
				{
					name: "avarekodcu",
					rank: "debugger",
					avatarUri: 'https://cdn0.iconfinder.com/data/icons/avatars-7/128/16-512.png',
					date: 'Bugün 01:20'
				},
				{
					name: "kipcakbegi",
					rank: "bugger",
					avatarUri: 'https://addmehits.com/up/profilresimleri/25f8915538b54dd39f520236c29f82.png',
					date: 'Bugün 01:20'
				},
				{
					name: "adaminbiri",
					rank: "logger",
					avatarUri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png',
					date: 'Bugün 01:20'
				}
			],
			points: {
					hepo: "",
					bugpo: "",
					fipo: "",
					keypo: "",
			}
		}
		this.getUserVCard();
	}

	async getUserVCard(){
		getSessionTicket().then(sessionTicket => {
			UserService.getUserVCard("getUserVCard", "vay@samet.com", sessionTicket).then(res => {
				this.setState({
					hepo: res.result.hepo,
					bugpo: res.result.bugpo,
					fipo: res.result.fipo,
					keypo: res.result.keypo
				})
			});
		});
	}

	render() {
		return (
			<View style={style.body}>
				<View style={style.header}>
					<View style={style.headerIconBox}>
						<Ionicon name="md-heart" size={30} color="#ff0000" />
						<Text style={[style.iconText, {backgroundColor: "#ff0000"}]}>{this.state.hepo}</Text>
					</View>
					<View style={style.headerIconBox}>
						<Ionicon name="ios-bug" size={30} color="#ffab2e" />
						<Text style={[style.iconText, {backgroundColor: '#ffab2e'}]}>{this.state.bugpo}</Text>
					</View>
					<View style={style.headerIconBox}>
						<FontAwesome name="microchip" size={30} color="#cd4eff" />
						<Text style={[style.iconText, {backgroundColor: '#cd4eff'}]}>{this.state.fipo}</Text>
					</View>
					<View style={style.headerIconBox}>
						<Octicon name="key" size={30} color="#2eff99" />
						<Text style={[style.iconText, {backgroundColor: '#2eff99'}]}>{this.state.keypo}</Text>
					</View>

				</View>

				<ScrollView>
					<View style={style.startGameArea}>
						<Text style={style.startGameAreaTitle}>Oynamak için tıkla</Text>
						<Image
							source={require('../../../../assets/images/kodabug.png')}
							style={style.startGameAreaImage} />
					</View>

					<View style={style.gameList}>
						<Text style={style.gameListTitle}>Sıradaki Oyunlar</Text>
						{
							this.state.games.map((game, key) => {
								return(
									<View key={key} style={style.gameListGame}>
										<Image source={{uri: game.avatarUri}} style={style.gameListAvatar} />
										<View style={style.gameListContent}>
											<Text style={style.gameListName}>{game.name}</Text>
											<Text style={style.gameListRank}>{game.rank}</Text>
											<Text style={style.gameListDate}>{game.date}</Text>
										</View>
									</View>
								)
							})
						}
					</View>
				</ScrollView>
			</View>
		);
	}
}

import getCss from '../../../../assets/style';
const style = StyleSheet.create(getCss('main-tab'));
