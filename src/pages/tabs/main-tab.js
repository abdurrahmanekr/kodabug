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

import {UserService, GameService} from '@kodabug/services';

import {
	getSessionTicket
} from '@kodabug/common';

import Ionicon from 'react-native-vector-icons/Ionicons'; // icon kütüphanesi
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicon from 'react-native-vector-icons/Octicons';

import style from '@kodabug/style/main-tab';

export default class MainTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
			points: {
				hepo: "",
				bugpo: "",
				fipo: "",
				keypo: "",
			}
		}
		this.loadUserData();

		getSessionTicket().then(sessionTicket => {
			GameService.getGameList("getGameList", sessionTicket).then(games => {
				games.result.map((game, key) => {
					UserService.getUserVCard("getUserVCard", game.grivalid, sessionTicket).then(user => {
						this.state.games.push({
							name: user.result.usname,
							rank: "rank",
							date: '05-05-05',
							avatarUri: user.result.photo,
							uspoint: game.uspoint,
							rivalpoint: game.rivalpoint
						});
						this.setState({games: this.state.games});
					});
				})
			})
		})
	}

	async loadUserData() {
		var self = this;
		UserService.loadUserData.bind(this)().then((user) => {
			self.setState({
				hepo: user.hepo,
				bugpo: user.bugpo,
				fipo: user.fipo,
				keypo: user.keypo
			})
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
							source={require('@kodabug/images').kodabugPNG}
							style={style.startGameAreaImage} />
					</View>

					<View style={style.gameList}>
						<Text style={style.gameListTitle}>Sıradaki Oyunlar</Text>
						{
							this.state.games.map((game, key) => {
								return(
									<View key={key} style={style.gameListGame}>
										<Image source={game.avatarUri ? {uri: game.avatarUri } : {uri: 'https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/Avatar-512.png'}} style={style.gameListAvatar} />
										<View style={style.gameListContent}>
											<Text style={style.gameListName}>{game.name}</Text>
											<Text style={style.gameListRank}>{game.rank}</Text>
											<Text style={style.gameListDate}>{game.date}</Text>
										</View>
										<View style={style.gameListStatus}>
											<View style={style.gameListScores}>
												<View style={style.gameListScoresText}>
													<Text style={{color: '#fff'}}>{game.uspoint}</Text>
												</View>
												<View style={style.gameListScoresText}>
													<Text style={{color: '#fff'}}>{game.rivalpoint}</Text>
												</View>
											</View>
											<View style={style.gameListQueue}>
												<Text style={[game.queue == "rival" ? style.gameListQueueRival : style.gameListQueueSelf, style.gameListQueueText]}>
													{game.queue == "rival" ? "Sıra onda" : "Sıra sende!"}
												</Text>
											</View>
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
