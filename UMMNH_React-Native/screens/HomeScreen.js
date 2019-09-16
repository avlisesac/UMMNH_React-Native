import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../utils/Colors';
import styles from '../stylesheets/HomeScreen';
import * as Font from 'expo-font';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
		headerStyle: {
			backgroundColor: colors.ummnhLightBlue
		},
		headerTitleStyle: {
			color: colors.ummnhDarkBlue
		},
		headerTintColor: colors.ummnhDarkBlue,
		headerBackTitle: "Back",
		headerBackTitleStyle: {
			color: colors.ummnhDarkBlue
		}
	}

  	async componentWillMount(){
  	  try {
  	    await Font.loadAsync({
  	      'whitney-black' : require ('../assets/fonts/Whitney-Black.otf'),
  	      'whitney-medium' : require ('../assets/fonts/Whitney-Medium.otf'),
  	      'whitney-semibold' : require ('../assets/fonts/Whitney-Semibold.otf'),
  	    });
  	    this.setState({fontLoaded: true});

  	  } catch (error) {
  	    console.log('error loading fonts', error)
  	  }
  	}
  	
	state = {
    	fontLoaded: false
  	};

  	render() {
  	  if (!this.state.fontLoaded) {
  	    return(
          <View style = { styles.loadingContainer }>
            <ActivityIndicator size = 'large' />
            <Text style = { styles.loadingText }>Loading...</Text>
          </View>
        ) 
  	  }
  	  return (
  	  	<View style={styles.container}>
    		  {/* <StatusBar hidden /> */}
    		  <ImageBackground style = { styles.backgroundImage } source = {require('../assets/img/home_background.png')}> 
    		    <View style = {styles.menuContainer}>
              <View style = { styles.welcomeMessageContainer }>
                <Image source = { require('../assets/img/home_message.png') } style = { styles.welcomeMessageImage }/>
              </View>
              
    		      <View style = {styles.buttonContainer}>
    		        <View style = {{paddingBottom: 10}}>
    		          <Button 
    		            title = "Tours" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
    		            onPress = { () => this.props.navigation.push('Tours')} 
                  />
    		        </View>
    		        <View style = {{paddingBottom: 10}}>
    		          <Button 
    		            title = "Today @ UMMNH"
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
                    onPress = { () => this.props.navigation.push('TodayAtUMMNH')}
                  />
    		        </View>
    		        <View style = {{paddingBottom: 10}}>
    		          <Button 
    		            title = "Map" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
                  />
    		        </View>
    		        <View style = {{paddingBottom: 20}}>
    		          <Button 
    		            title = "About" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
    		            onPress = {() => this.props.navigation.push('About')}
                  />
    		        </View>
    		      </View>
      		  </View>
      	</ImageBackground>
      </View>
  	);  
  }
}