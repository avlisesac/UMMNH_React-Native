import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
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
  	    return <Text>Loading...</Text>;
  	  }
  	  return (
  	  	<View style={styles.container}>
    		  {/* <StatusBar hidden /> */}
    		  <ImageBackground style = { styles.backgroundImage } source = {require('../assets/img/home_background.png')}> 
    		    <View style = {styles.menuContainer}>
    		      <View style = {styles.welcomeMessage}>
    		        <Text style = {styles.welcomeBig}>Welcome</Text>
    		        <Text style = {styles.welcomeSmall}>to the brand new</Text>
    		        <Text style = {styles.welcomeMed}>University of Michigan</Text>
    		        <Text style = {styles.welcomeBig}>Museum of</Text>
    		        <Text style = {styles.welcomeBig}>Natural History</Text>
  		
      		          <Text style = {styles.copyReg}>We celebrated our grand opening on</Text>
      		          <Text style = {styles.copyBold}>April 14th, 2019.</Text>
      		          <View style = {styles.spacer}/>
      		          <Text style = {styles.copyReg}>Please, enjoy your visit, and be sure to</Text>
      		          <Text style = {styles.copyBold}>come back in November</Text>
      		          <Text style = {styles.copyReg}>for our second grand opening.</Text>
      		          <View style = {styles.spacer}/>
      		          <Text style = {styles.copyReg}>There will be more to see, do, and</Text>
      		          <Text style = {styles.copyBold}>discover!</Text>
      		        </View>
      		        <View style = {styles.buttonContainer}>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Tours" 
      		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
      		            onPress = { () => this.props.navigation.navigate('Tours')} />
      		          </View>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Today @ UMMNH"
      		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}/>
      		          </View>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Map" 
      		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}/>
      		          </View>
      		          <View style = {{paddingBottom: 20}}>
      		            <Button 
      		            title = "About" 
      		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
      		            onPress = {() => this.props.navigation.navigate('About')}/>
      		          </View>
      		        </View>
      		      </View>
      		  </ImageBackground>
      		</View>
  	  	);  
  	}
}