import React from 'react'
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { StackActions } from 'react-navigation'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'
import styles from '../stylesheets/TourNavigationScreen'
import Swiper from 'react-native-swiper'
import BodyCopy from '../components/BodyCopy'
import navigationImages from '../utils/NavigationImages'
import navScreenData from '../utils/NavScreenData'

class TourNavigationScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title,
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
		headerRight: (
			<Button
				title = "Exit"
				buttonStyle = { styles.exitButtonStyle }
				titleStyle = { styles.exitButtonTitleStyle }
				onPress = { () => navigation.push('Exit') }
			/>
		)
	});


	constructor(props){
		super(props);

		this.state = {
			screenLoaded: false,
		}
	}

	componentDidMount(){
		const { navigation } = this.props
		const screenToLoad = navigation.getParam('screenToLoad')
		this.generateScreen(screenToLoad)
	}


	render(){

		//---LOADING---
		if(!this.state.screenLoaded || this.props.navigation.getParam('title') !== this.state.navTitle){
			return(
				<View style = { styles.loadingContainer }>
					<ActivityIndicator size = 'large' />
					<Text style = { styles.loadingText }>Loading...</Text>
				</View>
			)
		}

		//--LOADED--
		return (
			<View style = { styles.view }>
				<View style = { styles.mainContainer }>
					<View style = { styles.upperArea }>
						<View style = { styles.swipeContainer }>
							<Swiper style = { styles.wrapper } showsButtons = { true } activeDotColor = { 'white' } nextButton = { <Text style={styles.buttonText}>›</Text> } prevButton = { <Text style={styles.buttonText}>‹</Text>} >
								<Image style = { styles.navImage } source = { this.state.navImage_1 }/>
								<Image style = { styles.navImage } source = { this.state.navImage_2 }/>
							</Swiper>
						</View>

						<Text style = { styles.header }>{this.state.header}</Text>
						<View style = { styles.subheaderContainer }>
							<Ionicons name = 'md-pin' size = { fontSizes.subheaderSize } color = { colors.ummnhDarkRed } />
							<Text style = { styles.subheaderText }>{this.state.subheader}</Text>
						</View>
						<Text style = { styles.bodyCopy }>
							<BodyCopy textString = { this.state.description }/>
						</Text>
					</View>
						<View style = { styles.lowerArea }>
							<View style = { styles.buttonContainer }>
								<Button 
									title = 'Show on Map'
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.props.navigation.push('ShowOnMap', { imageToShow: this.state.mapImage, headerColor: colors.ummnhLightRed })}
								/>
								<Button 
									title = 'Found It!'
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.pushNextScreen(this.state.nextScreen) /*this.props.navigation.push('TourStop', { propsToSend })*/ }
								/>
								</View>
						</View>
				</View>
			</View>
		);
	}

	pushNextScreen(nextScreen){
		this.props.navigation.push('TourStop', { screenToLoad: nextScreen })
	}

	async generateScreen(screenToLoad) {
		const screenData = await loadScreenData(screenToLoad)

		this.props.navigation.setParams({ title: screenData.navTitle })
		
		this.setState({
			navTitle: screenData.navTitle,
			navImage_1: navigationImages[screenData.navImage_1],
			navImage_2: navigationImages[screenData.navImage_2],
			header: screenData.header,
			subheader: screenData.subheader,
			description: screenData.description,
			mapImage: screenData.mapImage,
			nextScreen: screenData.nextScreen,
			screenLoaded: true
		})
	}
}

const loadScreenData = (screenToLoad) => new Promise((resolve, reject) => {

	let fileData = navScreenData[screenToLoad].default

	let screenData = {
		navTitle: fileData.navTitle,
		navImage_1: fileData.navImage_1,
		navImage_2: fileData.navImage_2,
		header: fileData.header,
		subheader: fileData.subheader,
		description: fileData.description,
		mapImage: fileData.mapImage,
		nextScreen: fileData.nextScreen,
	}

	resolve(screenData)
})

export default TourNavigationScreen