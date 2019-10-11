import React from 'react'
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import NetInfo from '@react-native-community/netinfo'
import styles from '../stylesheets/TodayAtUMMNHScreen'
import colors from '../utils/Colors'
import links from '../utils/Links'
import Moment from 'react-moment'
import moment from 'moment'
import { firebaseApp } from '../firebase-config'

export default class TodayAtUMMNH extends React.Component{

	static navigationOptions = ({navigation}) => ({
		title: moment().format("ddd MMM Do YYYY").toString(),
		headerStyle: {
			backgroundColor: colors.ummnhLightGreen
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
	});

	loadData(urlToFetchFrom){
		let hasConnection = this.checkConnection()
		if(hasConnection){
			this.fetchData(urlToFetchFrom)
		}
	}

	async checkConnection(){
		let connected = false
		const state = await NetInfo.fetch()
		this.setState({
			activeConnection: state.isConnected,
			connectionType: state.type
		})
	}

	async fetchData(urlToFetchFrom){
		try {
			let response = await fetch(urlToFetchFrom)
			let responseJson = await response.json()
			let numberOfEvents = Object.keys(responseJson).length
			let returnArray = []

			for(i = 0; i < numberOfEvents; i++){
				let thisEvent = responseJson[Object.keys(responseJson)[i]]
				let thisEventKey = Object.keys(responseJson)[i]
				let objectToPush = {
					key: thisEventKey,
					title: thisEvent['combined_title'],
					startTime: moment(thisEvent['time_start'], 'hh:mm:ss').format('hh:mm a'),
					endTime: moment(thisEvent['time_end'], 'hh:mm:ss').format('hh:mm a'),
					description: thisEvent['description']
				}

				returnArray.push(objectToPush)
			}

			/*
			if(returnArray.length > 0){
				returnArray.push(
					<View>
						<Text>Here is the last thing on the list</Text>
					</View>
				)
			}
			*/

			this.setState({
				dataToDisplay: returnArray,
				dataLoaded: true,
			})

		} catch (error){
			console.log(error)
		}
	}

	constructor(props){
		super(props)

		this.state = {
			dataLoaded: false,
			dataToDisplay: 'No data to display...',
			activeConnection: false,
			connectionType: null,
		}

		this.loadData(urlToFetchFrom)

		this.logAnalytics()
	}

	logAnalytics = () => {
		let targetDB = firebaseApp.database().ref('analytics/screen-viewed/')

		let incrementValue = targetDB.once('value').then(function(snapshot){
			
			let currentValue = snapshot.val().TodayAtUMMNH

			let newValue = currentValue + 1

			console.log('todayt @ ummnh screen view count:', currentValue)

			targetDB.update({
				TodayAtUMMNH: newValue
			})
		})
	}

	render(){
		//No Internet Connection
		if(!this.state.activeConnection){
			return(
				<View style = { styles.notifContainer}>
					<Text style = { styles.notifText }>You do not appear to have an active internet connection!</Text>
					<Text style = { styles.notifText }>Please ensure you have an active internet connection and...</Text>
					<Button
						title = 'Try Again'
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.buttonTitleStyle }
						onPress = { () => this.loadData(urlToFetchFrom) }
					/>
				</View>
			)
		}
		
		//Connected to Internet, Loading
		if(!this.state.dataLoaded){
			return(
				<View style = { styles.notifContainer }>
					<ActivityIndicator size = 'large' />
					<Text style = { styles.notifText }>Connected.</Text>
					<Text style = { styles.notifText }>Attempting to load data...</Text>
				</View>
			)
		}
		
		//Connected, No Events Today
		if(this.state.dataToDisplay.length < 1){
			return(
				<View style = { styles.notifContainer }>
					<Text style = { styles.notifText }>No events at the museum today.</Text>
					
					<WebScheduleLinks />
				</View>
			)
		}

		//Connected, Events to Show
		return(
			<SafeAreaView style = { styles.mainContainer }>
				<FlatList
					data = { this.state.dataToDisplay }
					renderItem = {({ item }) =>
						<View style = { styles.listItem }>
							<Text style = { styles.title }>{ item.title }</Text>
							<Text style = { styles.time }>{ item.startTime } - { item.endTime }</Text>
							<Text style = { styles.description }>{ item.description }</Text>
						</View>
					}

					ListFooterComponent = { this.renderFooter }
				/>
			</SafeAreaView>
		)
	}

	renderFooter = () => {
		return(
			<WebScheduleLinks />
		)
	}
}

class WebScheduleLinks extends React.Component {
	_openLink = (link) => {
		WebBrowser.openBrowserAsync(link);
	}
	
	render(){
		return (
			<View style = { styles.webLinkHolder }>
				<Text style = { styles.notifText }>Like to plan ahead? See full schedules on our website!</Text>
				<View style = { styles.buttonContainer }>
					<Button
						title = 'Museum Events'
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.buttonTitleStyle }
						onPress = { () => this._openLink(links.museumEvents) }
					/>
					<Button
						title = 'Planetarium Shows'
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.buttonTitleStyle }
						onPress = { () => this._openLink(links.planetariumShows) }
					/>
				</View>
			</View>
		)
	}
}
//-----REAL SOURCE-----
const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445,3825'

//-----DATE FILTER-----
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825&range=2019-10-12to2019-10-12'


//-----TEST SOURCES-----
//All future events
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825'

//No planetarium
//const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445'

//No Events
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3825'