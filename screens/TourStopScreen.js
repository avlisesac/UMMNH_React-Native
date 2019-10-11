import React from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import styles from '../stylesheets/TourStopScreen'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'
import BodyCopy from '../components/BodyCopy'
import LoadingIndicator from '../components/LoadingIndicator'
import heroImages from '../utils/HeroImages'
import audioFiles from '../utils/AudioFiles'
import stopScreenData from '../utils/StopScreenData'
import preventDoubleClick from '../utils/preventDoubleClick'
import { firebaseApp } from '../firebase-config'

const ButtonEx = preventDoubleClick(Button)

export default class TourStopScreen extends React.Component{

	static navigationOptions = ({navigation}) => ({
		title: navigation.state.params.title,
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
				onPress = { () => navigation.push('Exit', { cameFromScreen: navigation.state.params.screenToLoad }) }
			/>
		)
	});

	async loadAudio(){
		try{
			soundObject.unloadAsync()

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

		this.state = ({
			screenLoaded: false,
			audioLoaded: false
		})

		this.logAnalytics()
	}

	logAnalytics = () => {
		const { navigation } = this.props
		const screenName = navigation.getParam('screenToLoad')
		const dbKey = "Stop_" + screenName
		console.log(dbKey)

		let targetDB = firebaseApp.database().ref('analytics/screen-viewed/')

		let incrementValue = targetDB.once('value').then(function(snapshot){
			
			let currentValue = snapshot.val()[dbKey]

			let newValue = currentValue + 1

			console.log("this page's view count:", currentValue)
			
			targetDB.update({
				[dbKey]: newValue
			})
			
		})
	}

	componentWillMount(){
		const { navigation } = this.props
		const screenToLoad = navigation.getParam('screenToLoad')
		this.generateScreen(screenToLoad)
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
		/*-----LOADING-----*/
		if(!this.state.screenLoaded || !this.state.audioLoaded || this.props.navigation.getParam('title') !== this.state.navTitle){
			return(
				<LoadingIndicator />
			)
		}

		/*-----LOADED-----*/
		return(
			<SafeAreaView style = { styles.safeAreaView }>
				<ScrollView contentContainerStyle = { styles.ScrollView }>
					<View style = { styles.view }>
						<View style = { styles.mainContainer }>
							<View style = { styles.heroHolder }>
								<Image style = { styles.heroImage } source = { this.state.heroImage }/>
								<ButtonEx
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

							<Text style = { styles.shortDescription }>
								<BodyCopy textString = { this.state.shortDescription }/>
							</Text>

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

							{/* Full Description */}
							{ this.state.showFullDescription && 
								<Text style = { styles.fullDescription }>
									<BodyCopy textString = { this.state.fullDescription }/>
								</Text>
							}

							<View style = { styles.TLASContainer }>
								<Text style = { styles.TLASHeader }>Think Like a Scientist</Text>
								<Text style = { styles.TLASSubheader }>(Tap on a question to view answer)</Text>

								<View style = { styles.TLASQuestionHolder }>

									{/* Question 1 */}
									<TouchableOpacity onPress = { () => this.setState({showTLAS_A1: !this.state.showTLAS_A1 }) }>
										<Text style = { styles.TLASButtonTitleStyle }>
											<BodyCopy textString = { this.state.TLAS_Q1 } parentFamily = 'black'/>
										</Text>
									</TouchableOpacity>

									{/* Answer 1 */}
									{ this.state.showTLAS_A1 && 
										<Text style = { styles.TLASAnswer }>
											<BodyCopy textString = { this.state.TLAS_A1 }/>
										</Text> 
									}

									{/* Question 2 */}
									<TouchableOpacity onPress = { () => this.setState({showTLAS_A2: !this.state.showTLAS_A2 }) }>
										<Text style = { styles.TLASButtonTitleStyle }>
											<BodyCopy textString = { this.state.TLAS_Q2 } parentFamily = 'black'/>
										</Text>
									</TouchableOpacity>
									
									{/* Answer 2 */}
									{ this.state.showTLAS_A2 && 
										<Text style = { styles.TLASAnswer }>
											<BodyCopy textString = { this.state.TLAS_A2 }/>
										</Text> 
									}

									{/* Question 3 */}
									<TouchableOpacity onPress = { () => this.setState({showTLAS_A3: !this.state.showTLAS_A3 }) }>
										<Text style = { styles.TLASButtonTitleStyle }>
											<BodyCopy textString = { this.state.TLAS_Q3} parentFamily = 'black'/>
										</Text>
									</TouchableOpacity>
									
									{/* Answer 3 */}
									{ this.state.showTLAS_A3 && 
										<Text style = { styles.TLASAnswer }>
											<BodyCopy textString = { this.state.TLAS_A3 }/>
										</Text> 
									}
								</View> 
							</View>

							<View style = { styles.buttonContainer }>
								<ButtonEx 
									title = "Next Stop!"
									buttonStyle = { styles.buttonStyle }
									titleStyle = { styles.buttonTitleStyle }
									onPress = { () => { this.pushNextScreen(this.state.isLastStop )} }
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	pushNextScreen(isLastStop){
		this.stop()
		if(!isLastStop){
			this.props.navigation.push('Navigation', { screenToLoad: this.state.nextScreen })
		} else {
			this.props.navigation.push('EndOfTour')
		}
	}

	async generateScreen(screenToLoad){
		const screenData = await loadScreenData(screenToLoad)

		this.props.navigation.setParams({ title: screenData.navTitle })

		this.setState({
			navTitle: screenData.navTitle,
			heroImage: heroImages[screenData.heroImage],
			header: screenData.header,
			subheader: screenData.subheader,
			shortDescription: screenData.shortDescription,
			fullDescription: screenData.fullDescription,
			playPauseIcon: 'md-play',
			TLAS_Q1: screenData.TLAS_Q1,
			TLAS_Q2: screenData.TLAS_Q2,
			TLAS_Q3: screenData.TLAS_Q3,
			TLAS_A1: screenData.TLAS_A1,
			TLAS_A2: screenData.TLAS_A2,
			TLAS_A3: screenData.TLAS_A3,
			imageGalleryContent: screenData.imageGalleryContent,
			nextScreen: screenData.nextScreen,
			isLastStop: screenData.isLastStop,
			screenLoaded: true,
		})

		this.loadAudio()
	}
}

const loadScreenData = (screenToLoad) => new Promise((resolve, reject) => {
	
	let fileData = stopScreenData[screenToLoad].default

	let screenData = {
		navTitle: fileData.navTitle,
		heroImage: fileData.heroImage,
		header: fileData.header,
		subheader: fileData.subheader,
		shortDescription: fileData.shortDescription,
		fullDescription: fileData.fullDescription,
		TLAS_Q1: fileData.TLAS_Q1,
		TLAS_Q2: fileData.TLAS_Q2,
		TLAS_Q3: fileData.TLAS_Q3,
		TLAS_A1: fileData.TLAS_A1,
		TLAS_A2: fileData.TLAS_A2,
		TLAS_A3: fileData.TLAS_A3,
		imageGalleryContent: fileData.imageGallery,
		nextScreen: fileData.nextScreen,
		isLastStop: fileData.isLastStop,
	}

	resolve(screenData)
})

let currentNavTitle = ''

const soundObject = new Audio.Sound();