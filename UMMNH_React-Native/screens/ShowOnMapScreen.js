import React from 'react'
import { Text, Image, View, ScrollView } from 'react-native'
import mapImages from '../utils/ShowOnMapImages'
import styles from '../stylesheets/ShowOnMapScreen'
import colors from '../utils/Colors'
import PinchableImage from '../components/PinchableImage'

export default class ShowOnMapScreen extends React.Component {

	static navigationOptions = ({navigation}) => ({
		title: '',
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
		super(props)
		this.state = {
			mapImage: '',
			screenInfoPopulated: false
		}
	}

	componentDidMount(){
		this.setState({
			mapImage: mapImages[this.props.navigation.state.params.imageToShow],
			screenInfoPopulated: true
		})

	}

	render(){
		if(!this.state.screenInfoPopulated){
			return <Text>Loading...</Text>
		}
		return(
			<PinchableImage image = { this.state.mapImage }/>
			//<Image style = { styles.mapImage } source = { this.state.mapImage } />
		)
	}
}
