import React from 'react'
import { Animated, Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import colors from '../utils/Colors'
import styles from '../stylesheets/ImageGalleryScreen'
import BodyCopy from '../components/BodyCopy'
import PinchableImage from '../components/PinchableImage'
import { PanGestureHandler, PinchGestureHandler, RotationGestureHandler, State } from 'react-native-gesture-handler'


export default class ImageGalleryScreen extends React.Component{
	panRef = React.createRef()
	pinchRef = React.createRef()

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
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
	});

	constructor(props){
		super(props)

		let galleryContent = this.props.navigation.getParam('imageGalleryContent')

		let { width, height } = Dimensions.get('window')

		this.state = {
			imageGalleryContent: galleryContent,
			screenWidth: width,
			screenHeight: height,
		}
	}

	pinZoomLayoutRef = React.createRef()

	render(){
		const imageGalleryData = this.state.imageGalleryContent

		let slides = Object.keys(imageGalleryData).map( (key, index) => {
			return (
				<View style = { styles.slideView } key = { index } title = {<Text numberOfLines = { 1 }>{ key }</Text>}>
					<PinchableImage style = { { flex: 1, } } image = { imageGalleryData[key] } />
					<Text style = { styles.slideText }>
						<BodyCopy textString = { key } />
					</Text>
				</View>
			)
		})

		return(
			<Swiper style = { styles.wrapper }  paginationStyle = { {bottom: 5, backgroundColor: 'rgba(255,255,255,0.5)' } } showsButtons = { true } activeDotColor = { 'black' } nextButton = { <Text style={styles.swiperButtonText}>›</Text> } prevButton = { <Text style={styles.swiperButtonText}>‹</Text>} >
				{ slides }
			</Swiper>
		)
	}
}