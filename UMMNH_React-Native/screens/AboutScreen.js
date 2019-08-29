import React from 'react';
import { Text } from 'react-native';

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
			<Text>About Screen</Text>
		);
	}
}