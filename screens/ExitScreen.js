import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../stylesheets/ExitScreen'
import colors from '../utils/Colors'

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

	render(){
		return(
			<View style = { styles.mainContainer }>
				<Text style = { styles.exitText }>Are you sure you want to exit the tour and return to the Home Screen?</Text>
				<View style = { styles.buttonContainer }>
					<Button
						title = "Yes"
						buttonStyle = { styles.buttonStyle }
						titleStyle = { styles.yesButtonTitleStyle }
						onPress = { () => this.props.navigation.popToTop() }
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