import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../stylesheets/ExitScreen'
import colors from '../utils/Colors'
import { firebaseApp } from '../firebase-config'

export default class ExitScreen extends React.Component {

	static navigationOptions = ({navigation}) => ({
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
	});

	logAndExit = () => {
		const { navigation } = this.props
		console.log(navigation)
		const dbKey = navigation.getParam('cameFromScreen')
		console.log(dbKey)

		let targetDB = firebaseApp.database().ref('analytics/left-tour-before-end/')

		let incrementValue = targetDB.once('value').then(function(snapshot){
			
			let currentValue = snapshot.val()[dbKey]

			let newValue = currentValue + 1

			console.log("this page's exit count:", currentValue)
			
			targetDB.update({
				[dbKey]: newValue
			})
			
		})

		this.props.navigation.popToTop()
	}

	render(){
		return(
			<View style = { styles.mainContainer }>
				<Text style = { styles.exitText }>Are you sure you want to exit the tour and return to the Home Screen?</Text>
				<View style = { styles.buttonContainer }>
					<Button
						title = "Yes"
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.yesButtonTitleStyle }
						onPress = { () => this.logAndExit() }
					/>
					<Button
						title = "No"
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.noButtonTitleStyle }
						onPress = { () => this.props.navigation.goBack()}
					/>
				</View>
			</View>
		)
	}
}