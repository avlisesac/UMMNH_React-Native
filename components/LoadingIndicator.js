import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default class LoadingIndicator extends React.Component{
	render(){
		return(
			<ActivityIndicator style = { styles.loader } size = 'large' />
		)
	}
}

const styles = StyleSheet.create({
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}
})