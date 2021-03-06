import React from 'react'
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { StackActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import styles from '../stylesheets/HighlightsTourPreview'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'
import preventDoubleClick from '../utils/preventDoubleClick'
import BodyCopy from '../components/BodyCopy'
import CachedImage from '../components/CachedImage'

const ButtonEx = preventDoubleClick(Button)

export default class HightlightsTourPreview extends React.Component {
	static navigationOptions = {
		title: "Highlights Tour",
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitle: "Back",
		headerTintColor: colors.ummnhDarkBlue
	}
	render() {
		return (
			<SafeAreaView style = { styles.safeAreaView }>
				<ScrollView style = { styles.scrollView }>
					<View style = { styles.outerView }>
						<View style = { styles.mainContainer }>
						{/*Upper Area*/}
							<View style = { styles.upperContent }>
								<View style = { styles.heroImageContainer }>
									<CachedImage image = { require('../assets/img/HeroImage_Doli.png') } resizeMode = 'contain' />
									
								</View>
								<View style = { styles.descriptionContainer }>
									<Text style = { styles.header }>Self-Guided Highlights Tour</Text>
									<View style = { styles.subheaderContainer }>
										<Ionicons name = 'md-time' size = { fontSizes.subheaderSize } color = { colors.ummnhDarkRed } />
										<Text style = { styles.subheaderText }>45 min.</Text>
									</View>
									<Text style = { styles.bodyCopy }>
										<BodyCopy style = { styles.bodyCopy } textString = {
											`See the best that the Museum of Natural History has to offer! This tour will last approximately fourty-five minutes and show you our favorite features of this amazing new space. At each stop, you will get additional facts and information that we couldn't quite cram on to the placards. (Trust us, we tried.)`
										}/>
									</Text>
								</View>
							</View>
							
	
							{/*Lower Area*/}
							<View style = { styles.lowerContent }>
								<View style = { styles.buttonContainer }>
									<ButtonEx 
      				    	        	title = "Let's Go!" 
      				    	        	buttonStyle = { styles.buttonStyle } 
      				    	        	titleStyle = { styles.buttonTitleStyle }
      				    	        	onPress = { () => this.props.navigation.push('Navigation',  { screenToLoad: 'Stop1_Mastodons' })} />
      				    	    </View>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const fileData = require('../assets/textFiles/navigation/highlightsTour/Stop1_Mastodons.js')

const propsToSend = gatherProps(fileData.default)


function gatherProps(fileData){
	return {
		navTitle: fileData.navTitle,
		navImage_1: fileData.navImage_1,
		navImage_2: fileData.navImage_2,
		header: fileData.header,
		subheader: fileData.subheader,
		description: fileData.description,
		mapImage: fileData.mapImage,
		nextScreen: fileData.nextScreen,
	}
}
