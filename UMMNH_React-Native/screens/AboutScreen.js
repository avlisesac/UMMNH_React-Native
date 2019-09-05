import React from 'react';
import { Text, ScrollView, StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/Colors';
import links from '../utils/Links';
import fontSizes from '../utils/FontSizes';
import styles from '../stylesheets/AboutScreen'

export default class AboutScreen extends React.Component {
	static navigationOptions = {
		title: "About",
		headerStyle: {
			backgroundColor: colors.ummnhYellow
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
				<ScrollView>
				<View style = {styles.mainContainer}>
					<View style = { styles.textContainer }>
						<Text style = { styles.sectionHeader }>Version 2.0</Text>
						<Text style = {styles.sectionContent}>-Rebuilt with React Native</Text>
						<Text style = {styles.sectionContent}>-Multi-platform. Now available on iOS and Android!</Text>
						<Text style = {styles.sectionContent}>-Added new gallery content</Text>
		
						<Text style = { styles.sectionHeader }>About the App</Text>
						<Text style = {styles.sectionContent}>Welcome to the University of Michigan Museum of Natural History app! Our app will help you enjoy and interact with the museum on a deeper level.</Text>
						<Text style = {styles.sectionContent}>Use the Tours feature to take a self-guided audio/text tour of our curated Highlights exhibits. Get a behind-the-scenes look at exhibit prep and additional images of things you can't see in the Museum itself. Get prompted to use your noodle with our Think Like a Scientist questions!</Text>
						<Text style = {styles.sectionContent}>Use the Today @ UMMNH feature to see if there are any special events or Planetarium shows that you can attend today at the museum.</Text>

						<Text style = { styles.sectionHeader }>Connect</Text>
						<View style = { styles.socMedHolder }>
							<Button 
								icon = {{name: 'md-globe', type: 'ionicon', size: 32, style: {marginRight: 0}}}
								buttonStyle = { styles.buttonStyle }
								onPress = {() => this._openLink(links.ummnhWebsite)}
							/>
							<Button 
								icon = {{name: 'logo-facebook', type: 'ionicon', size: 32, style: {marginRight: 0}}}
								buttonStyle = { styles.buttonStyle }
								onPress = { () => this._openLink(links.ummnhFacebook) }
							/>
							<Button 
								icon = {{name: 'logo-twitter', type: 'ionicon', size: 32, style: {marginRight: 0}}}
								buttonStyle = { styles.buttonStyle }
								onPress = { () => this._openLink(links.ummnhTwitter) }
							/>
							<Button 
								icon = {{name: 'logo-instagram', type: 'ionicon', size: 32, style: {marginRight: 0}}}
								buttonStyle = { styles.buttonStyle }
								onPress = { () => this._openLink(links.ummnhInstagram) }
							/>
						</View>
						<Text style = { styles. sectionHeader }>Credits</Text>
						<Text style = {styles.sectionContent}>Developed in-house at the University of Michigan Museum of Natural History by Case Silva</Text>
						<Text style = {styles.sectionContent}>UMMNH is a part of the University of Michigan's College of Literature, Science, and the Arts.</Text>
					</View>
				</View>
				</ScrollView>
		);
	}
	_openLink = (link) => {
		WebBrowser.openBrowserAsync(link);
	}
}