import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

export default class AboutScreen extends React.Component {
	static navigationOptions = {
		title: "About",
		headerStyle: {
			backgroundColor: '#ffcb05'
		},
		headerTitleStyle: {
			color: '#00274c'
		},
		headerBackTitleStyle: {
			color: '#00274c'
		},
		headerTintColor: '#00274c'
	}
	render() {
		return (

				<ScrollView centerContent = {"true"}>
					<View style = { styles.textContainer }>
						<Text style = { styles.textStyling }>Version 2.0</Text>
						<Text>-Rebuilt with React Native</Text>
						<Text>-Multi-platform. Now available on iOS and Android!</Text>
						<Text>-Added new gallery content</Text>
		
							<Text>About the App</Text>
							<Text>Welcome to the University of Michigan Museum of Natural History app! Our app will help you enjoy and interact with the museum on a deeper level.</Text>
							<Text>Use the Tours feature to take a self-guided audio/text tour of our curated Highlights exhibits. Get a behind-thescenes look at exhibit prep and additional images of things you can't see in the Museum itself. Get prompted to use your noodle with our Think Like a Scientist questions!</Text>
							<Text>Use the Today @ UMMNH feature to see if there are any special events or Planetarium shows that you can attend today at the museum.</Text>
	
							<Text>Connect</Text>
						
	
							<Text>Credits</Text>
							<Text>Developed in-house at the University of Michigan Museum of Natural History by Case Silva</Text>
							<Text>UMMNH is a part of the University of Michigan's College of Literature, Science, and the Arts.</Text>
						</View>
				</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	textContainer : {
		flex: 1,
		width: "90%",
		alignItems: 'center',
		backgroundColor: 'red'
	},
	textStyling : {
		width: "100%"
	}
})