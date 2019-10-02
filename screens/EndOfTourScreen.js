import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

export default class EndOfTourScreen extends React.Component {

	static navigationOptions = {
		title: "End of Tour",
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		}
	}

	render() {
		return (
			<View style = { styles.mainContainer } >
				<Text style = { [styles.header, styles.allCopy] }>That's the end!</Text>

				<Text style = { [styles.body, styles.allCopy] }>
					You've reached the end of the Highlights Tour. We hope you've enjoyed your time at the new University of Michigan Museum of Natural History. Be on the lookout for more tours to be added as we settle in to our new space. Hopefully your visit has taught you about the earth and its history, and we hope you're hungry for more!
				</Text>

				<Text style = { [styles.cta, styles.allCopy] }>Be sure to come back in November for our second Grand Opening!</Text>
				<View style = { styles.buttonContainer }>
					<Button
						title = 'Home'
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.buttonTitleStyle }
						onPress = { () => this.props.navigation.popToTop() }
					/>
				</View>
			</View>
			
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	header: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
	},
	body: {
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize,
	},
	cta: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.bodySize,
	},
	allCopy: {
		marginTop: 10,
		width: '100%',
		textAlign: 'justify',
	},
	buttonContainer: {
		width: '66%',
		alignSelf: 'center',
		marginTop: 20
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.subheaderSize,
		color: colors.ummnhDarkBlue
	}
})