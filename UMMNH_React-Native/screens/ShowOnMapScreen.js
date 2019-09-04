import React from 'react'
import { Text } from 'react-native'

export default class ShowOnMapScreen extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			mapImage: '',
			screenInfoPopulated: false
		}
	}

	async componentWillMount(){
		this.setState({
			mapImage: mapImages[this.props.navigation.state.imageToShow],
			screenInfoPopulated: true
		})

	}

	render(){
		return(
			<Text>Show on map screen</Text>
		)
	}
}

const mapImages = {
	'Stop1_Mastodons': require('../assets/img/showOnMap/highlightsTour/Tours_Highlights_ShowOnMap_Mastodons.png'),
}