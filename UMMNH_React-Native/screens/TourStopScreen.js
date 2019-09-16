import React from 'react'
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import styles from '../stylesheets/TourStopScreen'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

export default class TourStopScreen extends React.Component{

	static navigationOptions = ({navigation}) => ({
		title: navigation.getParam('propsToSend').navTitle,
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
		headerRight: (
			<Button
				title = "Exit"
				buttonStyle = { styles.exitButtonStyle }
				titleStyle = { styles.exitButtonTitleStyle }
				onPress = { () => navigation.push('Exit') }
			/>
		)
	});

	async loadAudio(){
		try{
			console.log('trying to load audio...')
			await soundObject.loadAsync(audioFiles[this.state.header])

			this.setState({
				audioLoaded: true
			})

		} catch (error) {
			console.log(error)
		}
	}

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
			showFullDescription: false,
			TLAS_Q1: listOfProps.TLAS_Q1,
			TLAS_Q2: listOfProps.TLAS_Q2,
			TLAS_Q3: listOfProps.TLAS_Q3,
			TLAS_A1: listOfProps.TLAS_A1,
			TLAS_A2: listOfProps.TLAS_A2,
			TLAS_A3: listOfProps.TLAS_A3,
			showTLAS_A1: false,
			showTLAS_A2: false,
			showTLAS_A3: false,
			imageGalleryContent: listOfProps.imageGallery,
			audioLoaded: false,
			playPauseIcon: 'md-play',
			audioIsPlaying: false
		}

		this.loadAudio()
	}

	componentWillUnmount(){
		soundObject.unloadAsync()
	}

	playPause(){
		if(!this.state.audioIsPlaying){
			soundObject.playAsync()
			this.setState({
				playPauseIcon: 'md-pause'
			})
		} else {
			soundObject.pauseAsync()
			this.setState({
				playPauseIcon: 'md-play'
			})
		}
		
		this.setState({
			audioIsPlaying: !this.state.audioIsPlaying
		})
	}

	stop(){
		soundObject.stopAsync()
		this.setState({
			playPauseIcon: 'md-play',
			audioIsPlaying: false
		})
	}

	render(){
		if(!this.state.audioLoaded){
			return(
				<View style = { styles.loadingContainer }>
					<ActivityIndicator size = 'large' />
					<Text style = { styles.loadingText }>Loading...</Text>
				</View>
			)
		}
		return(
			<ScrollView contentContainerStyle = { styles.ScrollView }>
				<View style = { styles.view }>
					<View style = { styles.mainContainer }>
						<View style = { styles.heroHolder }>
							<Image style = { styles.heroImage } source = { this.state.heroImage }/>
							<Button
								title = "Image Gallery"
								buttonStyle = { styles.imageGalleryButtonStyle }
								titleStyle = { styles.buttonTitleStyle }
								onPress = { () => this.props.navigation.push('ImageGallery', { imageGalleryContent: this.state.imageGalleryContent } )}
							/>
						</View>

						<Text style = { styles.header }>{ this.state.header }</Text>

						<View style = { styles.subheaderContainer }>
							<Ionicons name = 'md-bulb' size = { fontSizes.subheaderSize } color = { colors.ummnhDarkRed } />
							<Text style = { styles.subheader }>{ this.state.subheader }</Text>
						</View>

						<Text style = { styles.shortDescription }>{ this.state.shortDescription }</Text>

						<View style = { styles.audioTourContainer }>
							<Text style = { styles.audioTourHeader }>Audio Tour</Text>
							<View style = { styles.audioTourButtonContainer }>
								<Button
									icon = {{name:  this.state.playPauseIcon , type: 'ionicon', size: fontSizes.subheaderSize, color: colors.ummnhDarkBlue, iconStyle: {marginRight: 10, marginLeft: 10}}} 
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.playPause()}
								/>
								<Button
									icon = {{name: 'md-square', type: 'ionicon', size: fontSizes.subheaderSize, color: colors.ummnhDarkBlue, iconStyle: {marginRight: 10, marginLeft: 10}}} 
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.stop() }
								/>
								<Button
									title = 'Show/Hide Text'
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => this.setState({showFullDescription: !this.state.showFullDescription})}
								/>
							</View>
						</View>

						{ this.state.showFullDescription && <Text style = { styles.fullDescription }>{ this.state.fullDescription }</Text>}

						<View style = { styles.TLASContainer }>
							<Text style = { styles.TLASHeader }>Think Like a Scientist</Text>
							<Text style = { styles.TLASSubheader }>(Tap on a question to view answer)</Text>

							<View style = { styles.TLASQuestionHolder }>
								<Button 
									title =  { this.state.TLAS_Q1 }
									buttonStyle = { styles.TLASButtonStyle}
									titleStyle = { styles.TLASButtonTitleStyle }
									onPress = { () => this.setState({ showTLAS_A1: !this.state.showTLAS_A1 }) }
								/>
								{ this.state.showTLAS_A1 && <Text style = { styles.TLASAnswer }>{ this.state.TLAS_A1 }</Text> }

								<Button 
									title = { this.state.TLAS_Q2 }
									buttonStyle = { styles.TLASButtonStyle }
									titleStyle = { styles.TLASButtonTitleStyle }
									onPress = { () => this.setState({ showTLAS_A2: !this.state.showTLAS_A2 }) }
								/>
								{ this.state.showTLAS_A2 && <Text style = { styles.TLASAnswer }>{ this.state.TLAS_A2 }</Text> }

								<Button 
									title = { this.state.TLAS_Q3 }
									buttonStyle = { styles.TLASButtonStyle }
									titleStyle = { styles.TLASButtonTitleStyle }
									onPress = { () => this.setState({ showTLAS_A3: !this.state.showTLAS_A3 }) }
								/>
								{ this.state.showTLAS_A3 && <Text style = { styles.TLASAnswer }>{ this.state.TLAS_A3 }</Text> }
							</View> 
						</View>

						<View style = { styles.buttonContainer }>
							<Button 
								title = "Next Stop!"
								buttonStyle = { styles.buttonStyle }
								titleStyle = { styles.buttonTitleStyle }
								//onPress = { () => }
							/>
						</View>

					</View>
				</View>
			</ScrollView>
		)
	}
}

const soundObject = new Audio.Sound();

const heroImages = {
	'HeroImage_Mastodons': require('../assets/img/heroImages/HeroImage_Mastodons.png')
}

const audioFiles = {
	'Stop: The Mastodons': require('../assets/audioFiles/Mastodons.mp3')
}