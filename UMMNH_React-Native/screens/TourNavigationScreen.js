import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { StackActions } from 'react-navigation';
import colors from '../utils/Colors';
import fontSizes from '../utils/FontSizes';
import styles from '../stylesheets/TourNavigationScreen';
import Swiper from 'react-native-swiper';

class TourNavigationScreen extends React.Component {

	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('propsToSend').navTitle,
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

		let listOfProps = this.props.navigation.getParam('propsToSend')
		propsToSend = getProps(this.props.navigation.getParam('propsToSend').nextScreen);

		this.state = {
			navTitle: listOfProps.navTitle,
			navImage_1: navigationImages[listOfProps.navImage_1],
			navImage_2: navigationImages[listOfProps.navImage_2],
			header: listOfProps.header,
			subheader: listOfProps.subheader,
			description: listOfProps.description,
			mapImage: listOfProps.mapImage,
			nextScreen: listOfProps.nextScreen,
			propsToSend: propsToSend,
			screenInfoPopulated: false,
		}
	}

	componentDidMount(){
		
		this.setState({
			screenInfoPopulated: true
		})
	}

	render(){
		if(!this.state.screenInfoPopulated){
			return <Text>Loading...</Text>
		}
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
						<Text style = { styles.description }>{this.state.description}</Text>
					</View>
						<View style = { styles.lowerArea }>
							<View style = { styles.buttonContainer }>
								<Button 
									title = 'Show on Map'
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.props.navigation.push('ShowOnMap', { imageToShow: this.state.mapImage })}
								/>
								<Button 
									title = 'Found It!'
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.props.navigation.push('TourStop', { propsToSend }) }
								/>
								</View>
						</View>
				</View>
			</View>
		);
	}
}

let propsToSend;

function getProps(nextScreen) {
	let fileData = nextScreenData[nextScreen].default

	return {
		navTitle: fileData.navTitle,
		heroImage: fileData.heroImage,
		header: fileData.header,
		subheader: fileData.subheader,
		shortDescription: fileData.shortDescription,
		fullDescription: fileData.fullDescription,
		TLAS_Q1: fileData.TLAS_Q1,
		TLAS_Q2: fileData.TLAS_Q2,
		TLAS_Q3: fileData.TLAS_Q3,
		TLAS_A1: fileData.TLAS_A1,
		TLAS_A2: fileData.TLAS_A2,
		TLAS_A3: fileData.TLAS_A3,
		nextScreen: fileData.nextScreen,
		imageGallery: fileData.imageGallery,
	}
}

const nextScreenData = {
	'Stop1_Mastodons': require('../assets/textFiles/stops/highlightsTour/Stop1_Mastodons.js'),
}

const navigationImages = {
	'NavImage_Mastodons_1': require('../assets/img/navigation/highlightsTour/Tours_Highlights_Navigation_Mastodons_01.png'),
	'NavImage_Mastodons_2': require('../assets/img/navigation/highlightsTour/Tours_Highlights_Navigation_Mastodons_02.png'),
	
}



export default TourNavigationScreen