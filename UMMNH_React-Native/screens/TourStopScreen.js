import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import styles from '../stylesheets/TourStopScreen'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

export default class TourStopScreen extends React.Component{

	constructor(props){
		super(props)

		let listOfProps = this.props.navigation.getParam('propsToSend')

		this.state = {
			navTitle: listOfProps.navTitle,
			heroImage: heroImages[listOfProps.heroImage],
			header: listOfProps.header,
			subheader: listOfProps.subheader,
			shortDescription: listOfProps.shortDescription,
			fullDescription: listOfProps.fullDescription,
			TLAS_Q1: listOfProps.TLAS_Q1,
			TLAS_Q2: listOfProps.TLAS_Q2,
			TLAS_Q3: listOfProps.TLAS_Q3,
			TLAS_A1: listOfProps.TLAS_A1,
			TLAS_A2: listOfProps.TLAS_A2,
			TLAS_A3: listOfProps.TLAS_A3,
		}
	}


	render(){
		return(
			<ScrollView contentContainerStyle = { styles.ScrollView }>
				<View style = { styles.view }>
					<View style = { styles.mainContainer }>
						<View style = { styles.heroHolder }>
							<Image style = { styles.heroImage } source = { this.state.heroImage }/>
						</View>

						<Text>{ this.state.header }</Text>

						<View style = { styles.subheaderContainer }>
							<Ionicons name = 'md-bulb' size = { fontSizes.subheaderSize } color = { colors.ummnhDarkRed } />
							<Text style = { styles.subheader }>{ this.state.subheader }</Text>
						</View>

						<Text style = { styles.shortDescription }>{ this.state.shortDescription }</Text>

						<View style = { styles.audioTourContainer }>
						</View>

						<Text style = { styles.fullDescription }>{ this.state.fullDescription }</Text>

						<View style = { styles.TLASContainer }>
							<Text style = { styles.TLASHeader }>Think Like a Scientist</Text>
							<Text style = { styles.TLASSubheader }>(Tap on a question to view answer)</Text>

							<View style = { styles.TLASQuestionHolder }>
								<Button title = { this.state.TLAS_Q1 }
								/>
								<Text style = { styles.TLASAnswer }>{ this.state.TLAS_A1 }</Text>
								<Button title = { this.state.TLAS_Q2 }
								/>
								<Text style = { styles.TLASAnswer }>{ this.state.TLAS_A2 }</Text>
								<Button title = { this.state.TLAS_Q3 }
								/>
								<Text style = { styles.TLASAnswer }>{ this.state.TLAS_A3 }</Text>
							</View> 
						</View>

					</View>
				</View>
			</ScrollView>
		)
	}
}

const heroImages = {
	'HeroImage_Mastodons': require('../assets/img/heroImages/HeroImage_Mastodons.png')
}