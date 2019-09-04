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
		title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === ' ' ? 'Find': navigation.state.params.title,
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue
	})

	constructor(props){
		super(props);
		this.state = {
			navTitle: '',
			navImage_1: '',
			navImage_2: '',
			header: '',
			subheader: '',
			description: '',
			mapImage: '',
			nextScreen: '',
			screenInfoPopulated: false,
		}
	}

	async componentWillMount(){
		this.response = await (screenInfo(this.props.navigation.state.params.fileToFetch)).default
		this.props.navigation.setParams({
			title: this.response.navTitle
		})
		this.setState({
			navImage_1: navigationImages[this.response.navImage_1],
			navImage_2: navigationImages[this.response.navImage_2],
			header: this.response.header,
			subheader: this.response.subheader,
			description: this.response.description,
			mapImage: this.response.mapImage,
			nextScreen: this.response.nextScreen,
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
								<Image style = { styles.navImage } source = {this.state.navImage_1}/>
								<Image style = { styles.navImage } source = {this.state.navImage_2}/>
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
									onPress = { () => this.props.navigation.push('TourStopScreen', { fileToLoad: this.nextScreen }) }
								/>
								</View>
						</View>
				</View>
			</View>
		);
	}
}

const screenInfo = (
		(fileToFetch) => {
			switch(fileToFetch){
				case 'Stop1_Mastodons' : return require('../assets/textFiles/navigation/highlightsTour/Stop1_Mastodons.js');
			}
		}
	);

const navigationImages = {
	'NavImage_Mastodons_1': require('../assets/img/navigation/highlightsTour/Tours_Highlights_Navigation_Mastodons_01.png'),
	'NavImage_Mastodons_2': require('../assets/img/navigation/highlightsTour/Tours_Highlights_Navigation_Mastodons_02.png'),
	
}

const showOnMapImages = {
	'MapImage_Mastodons': require('../assets/img/showOnMap/highlightsTour/Tours_Highlights_ShowOnMap_Mastodons.png')
}



export default TourNavigationScreen