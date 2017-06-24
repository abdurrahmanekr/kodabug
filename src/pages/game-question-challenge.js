import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	Image,
	ActivityIndicator
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {
	Grid,
	Row,
	Col
} from 'react-native-elements';

import {
	GameService,
	UserService
} from '@kodabug/services';

import style from '@kodabug/style/game-question-challenge';

export default class GameQuestionChallenge extends Component {
	constructor(props) {
		super(props);

		this.state = {
			guser: {
				name: GLOBALS.user.usname,
				photo: GLOBALS.user.photo,
			},
			rivalUser: {
				name: null,
				photo: null,
			},
			isLoadedRivalUser: false, // 'loading' || 'loaded'
			time: 3,
			gid: null
		}
	}

	startGame() {
		var self = this;
		this.setState({
			isLoadedRivalUser: 'loading'
		});
		GameService.startGame({}).then(res => {
			if (res.result !== -1) {
				res = res.result;
				self.setState({
					gid: res.gid
				});

				UserService.getUserVCard({ usid: res.rival }).then(user => {

					self.setState({
						isLoadedRivalUser: 'loaded',
						rivalUser: {
							name: user.result.usname,
							photo: user.result.photo
						}
					});
					self.letsDoIt();
				});
			}
		})
	}

	letsDoIt(start) {
		if (start !== undefined)
			Actions.GameQuestionMain({
				state: {
					gid: this.state.gid
				},
				type: 'reset'
			});
		else
			this.countdown();
	}

	countdown() {
		var self = this;
		setTimeout(function() {
			self.setState({
				time: --self.state.time
			});
			if (self.state.time !== 0)
				return self.countdown();
			self.letsDoIt(true);
		}, 1000);
	}

	render() {
		return (
			<View style={style.body}>
				<Grid>
					<Col>
						<View
							style={style.column}>
							<Image
								source={this.state.guser.photo ? {
									uri: this.state.guser.photo
								} : require('@kodabug/images').userPNG}
								style={style.userImage}/>
							<Text
								style={style.userName}>{this.state.guser.name || ' '}</Text>
						</View>
					</Col>
					<Col>
						<View
							style={style.column}>
							<Image
								source={this.state.rivalUser.photo ? {
									uri: this.state.rivalUser.photo
								} : require('@kodabug/images').userPNG}
								style={style.userImage}/>
							<Text
								style={style.userName}>{this.state.rivalUser.name || 'undefined'}</Text>
							<ActivityIndicator
								style={style.loadingUser}
								animating={this.state.isLoadedRivalUser === 'loading'}
								size={"large"}/>
						</View>
					</Col>
				</Grid>
				<Grid>
					<Col>
						<View
							style={style.column}>
							{
								this.state.isLoadedRivalUser === 'loaded' &&
								<View>
									<Text
										style={style.successText}>Kullanıcı Bulundu Başlıyor ({this.state.time})</Text>
								</View>
							}
							<TouchableOpacity
								disabled={!!this.state.isLoadedRivalUser}
								onPress={this.startGame.bind(this)}
								style={style.button}>
								<Text
									style={style.buttonText}>order by rand() limit 1</Text>
							</TouchableOpacity>
						</View>
					</Col>
				</Grid>
			</View>
		);
	}
}
