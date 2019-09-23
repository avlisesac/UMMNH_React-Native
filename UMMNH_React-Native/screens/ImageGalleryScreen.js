import React from 'react'
import { Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import colors from '../utils/Colors'
import styles from '../stylesheets/ImageGalleryScreen'
import BodyCopy from '../components/BodyCopy'

export default class ImageGalleryScreen extends React.Component{

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

		this.state = {
			imageGalleryContent: galleryContent
		}
	}

	render(){
		const imageGalleryData = this.state.imageGalleryContent

		let slides = Object.keys(imageGalleryData).map( (key, index) => {
			return (
				<View style = { styles.slideView } key = { index } title = {<Text numberOfLines = { 1 }>{ key }</Text>}>
					<Image style = { styles.slideImage } source = { imageGalleryData[key] } />
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