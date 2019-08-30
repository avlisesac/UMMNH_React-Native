import Constants from 'expo-constants'

console.log(Constants.platform)

const headerSize = () => {
	if(isPad()){
		return 27
	}
	return 22
}

const fontSizes = {
	headerSize: headerSize(),
}

function isPad(){
	if(Constants.platform === 'android'){
		return false
	}
	else if(Constants.platform.ios.userInterfaceIdiom === 'tablet'){
		return true
	}
	return false
}
export default fontSizes