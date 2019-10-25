import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import LoadingIndicator from '../components/LoadingIndicator'
import colors from '../utils/Colors';
import styles from '../stylesheets/HomeScreen';
import preventDoubleClick from '../utils/preventDoubleClick'

const ButtonEx = preventDoubleClick(Button)


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

  pushScreen = (screenToPush) => {
    this.props.navigation.push(screenToPush)
  }

  pushScreenWithProps = (screenToPush, imageToShow, headerColor) => {
    this.props.navigation.push(screenToPush, { imageToShow: imageToShow, headerColor: headerColor })
  }

  	render() {
  	  return (
  	  	<View style={styles.container}>
    		  <ImageBackground style = { styles.backgroundImage } source = {require('../assets/img/home_background.png')}> 
          <SafeAreaView style = { styles.safeAreaView }>
    		    <View style = {styles.menuContainer}>
              <View style = { styles.welcomeMessageContainer }>
                {/*<View style = { styles.bigWords }>*/}
                  <View style = { styles.bigWordsInnerContainer}>
                    <Text style = { [styles.bigWordsText, styles.bigBig] }>Welcome</Text>
                    <Text style = { [styles.bigWordsText, styles.bigNormal]}>to the brand new</Text>
                    <Text style = { [styles.bigWordsText, styles.bigNormal]} >University of Michigan</Text>
                    <Text style = { [styles.bigWordsText, styles.bigBig] }>Museum of</Text>
                    <Text style = { [styles.bigWordsText, styles.bigBig] }>Natural History</Text>
                  </View>
                {/* </View> */}
                <View style = { styles.smallWords }>
                    {/*<View style = { styles.smallWordsInnerContainer }>*/}
                      <Text style = { [styles.smallWordsText, styles.smallNormal] }>We celebrated our grand opening on</Text>
                      <Text style = { [styles.smallWordsText, styles.smallBold] }>April 14th, 2019</Text>

                      <Text style = { [styles.smallWordsText, styles.smallNormal] }>Please, enjoy your visit, and be sure to</Text>
                      <Text style = { [styles.smallWordsText, styles.smallBold] }>come back in November</Text>
                      <Text style = { [styles.smallWordsText, styles.smallNormal] }>for our More to Explore event.</Text>

                      <Text style = { [styles.smallWordsText, styles.smallNormal] }>There will be more to see, do, and</Text>
                      <Text style = { [styles.smallWordsText, styles.smallBold] }>discover!</Text>
                  {/*</View>*/}
                </View>
                {/* <Image source = { require('../assets/img/home_message.png') } style = { styles.welcomeMessageImage }/> */}
              </View>
              
    		      <View style = {styles.buttonContainer}>
    		        <View style = {{paddingBottom: 10}}>
    		          <ButtonEx 
    		            title = "Tours" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
    		            onPress =  { () => this.pushScreen('Tours') }
                  />
    		        </View>
    		        <View style = {{paddingBottom: 10}}>
    		          <ButtonEx 
    		            title = "Today @ UMMNH"
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
                    onPress = { () => this.pushScreen('TodayAtUMMNH')}
                  />
    		        </View>
    		        <View style = {{paddingBottom: 10}}>
    		          <ButtonEx 
    		            title = "Map" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
                    onPress = { () => this.pushScreenWithProps('ShowOnMap','Blank', colors.ummnhLightBlue) }
                  />
    		        </View>
    		        <View style = {{paddingBottom: 20}}>
    		          <ButtonEx 
    		            title = "About" 
    		            buttonStyle = {{backgroundColor: colors.ummnhYellow }} 
    		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
    		            onPress = {() => this.pushScreen('About')}
                  />
    		        </View>
    		      </View>
      		  </View>
            </SafeAreaView>
      	</ImageBackground>
      </View>
  	);  
  }
}