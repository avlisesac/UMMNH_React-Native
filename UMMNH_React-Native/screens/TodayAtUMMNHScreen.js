import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import NetInfo from '@react-native-community/netinfo'
import styles from '../stylesheets/TodayAtUMMNHScreen'
import colors from '../utils/Colors'
import Moment from 'react-moment'
import moment from 'moment'

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
	}



	render(){
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
		
		if(!this.state.dataLoaded){
			return(
				<View style = { styles.notifContainer }>
					<ActivityIndicator size = 'large' />
					<Text style = { styles.notifText }>Connected.</Text>
					<Text style = { styles.notifText }>Attempting to load data...</Text>
				</View>
			)
		}
		
		if(this.state.dataToDisplay.length < 1){
			return(
				<View style = { styles.notifContainer }>
					<Text style = { styles.notifText }>No events at the museum today.</Text>
					<Text style = { styles.notifText }>Please check back soon!</Text>
				</View>
			)
		}

		return(
			<View style = { styles.mainContainer }>
				<FlatList
					data = { this.state.dataToDisplay }
					renderItem = {({ item }) =>
						<View style = { styles.listItem }>
							<Text style = { styles.title }>{ item.title }</Text>
							<Text style = { styles.time }>{ item.startTime } - { item.endTime }</Text>
							<Text style = { styles.description }>{ item.description }</Text>
						</View>
					}
				/>
			</View>
		)
	}

	
}
//-----REAL SOURCE-----
const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445,3825'


//-----TEST SOURCES-----
//All future events
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825'

//No planetarium
//const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445'