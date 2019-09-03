import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'

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
		headerTintColor: colors.ummnhDarkBlue
	}
	render() {
		return (
			<View style = { styles.mainContainer }>
				<View style = { styles.widthContainer }>
				{/*Upper Area*/}
					<View style = { styles.upperContent }>
						<Image style = { styles.heroImage } source = {require('../assets/img/HeroImage_Doli.png')} resizeMode = "contain" />
						<View style = { styles.descriptionContainer }>
							<Text style = { styles.header }>Highlights Tour</Text>
							<View style = { styles.subheaderContainer }>
								<Ionicons name = 'md-time' size = { 17 } color = { colors.ummnhDarkRed } />
								<Text style = { styles.subheaderText }>45 min.</Text>
							</View>
							<Text style = { styles.description }>
								See the best that the Museum of Natural History has to offer! This tour will last approximately fourty-five minutes and show you our favorite features of this amazing new space. At each stop, you will get additional facts and information that we couldn't quite cram on to the placards. (Trust us, we tried.)
							</Text>
						</View>
					</View>

				{/*Lower Area*/}
					<View style = { styles.lowerContent }>
						<Button 
      		            title = "Let's Go!" 
      		            buttonStyle = { styles.buttonStyle } 
      		            titleStyle = { styles.buttonTitleStyle }
      		            onPress = { () => this.props.navigation.navigate('Tours')} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center'
	},
	widthContainer: {
		flex: 1,
		width: '90%',
	},
	upperContent: {
		flex: 2,
	},
	lowerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		paddingLeft: 25,
		paddingRight: 25
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		color: colors.ummnhDarkBlue,
		fontSize: 22,
	},
	heroImage: {
		marginTop: 10,
		width: '100%',
		height: undefined,
		aspectRatio: 16/9,
	},
	descriptionContainer: {
		marginTop: 10,
		flex: 1,
	},
	header: {
		color: colors.ummnhDarkBlue,
		fontFamily: "whitney-black",
		fontSize: fontSizes.headerSize
	},
	subheaderContainer: {
		marginTop: 5,
		flexDirection: 'row'
	},
	subheaderText: {
		color: colors.ummnhDarkRed,
		fontFamily: 'whitney-semibold',
		fontSize: fontSizes.subheaderSize,
		marginLeft: 5
	},
	description: {
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		marginTop: 10,
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25)
	}
})