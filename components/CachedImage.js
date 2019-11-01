import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native'
import { Asset } from 'expo-asset'

export default class CachedImage extends React.Component{
	state = {
		imageLoaded: false
	}

	componentDidMount(){
		console.log('passed image:', this.props.image)
		this._loadImageAsync()
	}

	async _loadImageAsync(){
		console.log('loading image async', this.props.image)
		const imageAssets = this.cacheImages([
			this.props.image
		])

		await Promise.all([...imageAssets])

		this.handleImageLoaded()

		console.log('passed setstate')
	}

	cacheImages = (images) => {
		console.log('caching image:', images)
		return images.map(image => {
			return Asset.fromModule(image).downloadAsync()
		})
	}

	handleImageLoaded = () => {
		console.log('setting to image loaded')
		this.setState({
			imageLoaded: true
		})
	}

	render(){
		let imageData = this.props.image
		imageData.cache = 'force-cache'

		if(!this.state.imageLoaded){
			return(
				<View style = { styles.container} >
					<ActivityIndicator style = { styles.loadingStyle } size = 'large' color = '#00b6f1' />
					
				</View>
			)
		}
		return(
			<Image style = {[ styles.imageStyle, { resizeMode: this.props.resizeMode } ]} source = { imageData }/>
		)
	}
}

const styles = StyleSheet.create({
	loadingStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	imageStyle: {
		flex: 1,
		height: null,
		width: null,
		//resizeMode: { this.props.resizeMode }
	},
	container:{
		flex: 1,
	}
})