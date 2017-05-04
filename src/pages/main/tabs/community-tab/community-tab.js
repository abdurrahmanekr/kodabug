import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	ListView
} from 'react-native';

import {
	Card,
	ListItem,
	Grid,
	Row,
	Col,
	SearchBar
} from 'react-native-elements';

import {Actions} from 'react-native-router-flux';

export default class CommunityTab extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			follow: ds.cloneWithRows([
				{
					name: 'Abdurrahman',
					rankName: 'debugger',
					photo: ''
				},
				{
					name: 'Kipcak',
					rankName: 'master',
					photo: ''
				},
				{
					name: 'Abdurrahman',
					rankName: 'debugger',
					photo: ''
				},
				{
					name: 'Kipcak',
					rankName: 'master',
					photo: ''
				},
				{
					name: 'Abdurrahman',
					rankName: 'debugger',
					photo: ''
				},
				{
					name: 'Kipcak',
					rankName: 'master',
					photo: ''
				}
			]),
			followers: [],
			news: ds.cloneWithRows([
				{
					title: 'Kipcak begi bilmem ne yapmış',
					date: new Date(),
					photo: ''
				},
				{
					title: 'Öbürü neler yapmamış ki',
					date: new Date(),
					photo: ''
				},
				{
					title: 'Uvvv Abdurrahman Eker\'i hiç sorma',
					date: new Date(),
					photo: ''
				}
			])
		}
	}

	render() {
		return (
			<View style={style.body}>
				<ScrollView>
					<Grid>
						<Row>
							<Col>
								<SearchBar
							  		lightTheme
								  	round
								  	onChangeText={() => {}}
								  	placeholder='Toplulukta ara...' />
							</Col>
						</Row>
						<Row>
							<Col>
								<Card
									title='Takipçiler'
									containerStyle={style.card_view}
									dividerStyle={style.card_divider}
									titleStyle={style.card_title}>
									<ListView
										style={style.card_list_view}
										renderRow={(item, i) =>
											<ListItem
										        key={i}
										        roundAvatar
										        avatar={item.photo ? {uri: item.photo}: require('../../../../assets/images/user.png')}
										        title={item.name}
										        hideChevron={true}
										        subtitle={item.rankName}
										    />

										}
										dataSource={this.state.follow}/>
								</Card>
							</Col>
							<Col>
								<Card
									title='Takip Edilenler'
									containerStyle={style.card_view}
									dividerStyle={style.card_divider}
									titleStyle={style.card_title}>
									<ListView
										style={style.card_list_view}
										renderRow={(item, i) =>
											<ListItem
										        key={i}
										        roundAvatar
										        avatar={item.photo ? {uri: item.photo}: require('../../../../assets/images/user.png')}
										        title={item.name}
										        hideChevron={true}
										        subtitle={item.rankName}
										    />

										}
										dataSource={this.state.follow}/>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card
									title='Millet Ne Yapıyor ?'
									containerStyle={style.news_card_view}
									dividerStyle={style.card_divider}
									titleStyle={style.card_title}>
									<ListView
										renderRow={(item, i) =>
											<ListItem
										        key={i}
										        roundAvatar
										        avatar={item.photo ? {uri: item.photo}: require('../../../../assets/images/user.png')}
										        title={item.title}
										        hideChevron={true}
										        rightTitle={item.date ? item.date.toDateString(): ' '}
										    />

										}
										dataSource={this.state.news}/>
								</Card>
							</Col>
						</Row>
					</Grid>

				</ScrollView>
			</View>
		);
	}
}

import getCss from '../../../../assets/style';
const style = StyleSheet.create(getCss('community-tab'));
