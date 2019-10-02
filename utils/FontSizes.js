import Constants from 'expo-constants'

const headerSize = () => {
	if(isPad()){
		return 27
	}
	return 22
}

const subheaderSize = () => {
	if(isPad()){
		return 25
	}
	return 20
}

const bodySize = () => {
	if(isPad()){
		return 22
	}
	return 17
}


const fontSizes = {
	headerSize: headerSize(),
	subheaderSize: subheaderSize(),
	bodySize: bodySize(),
}

function isPad(){
	const platform = Object.keys(Constants.platform)[0];
	if(platform === 'android'){
		console.log("running on android device")
		return false
	}
	const userInterfaceIdiom = Constants.platform.ios['userInterfaceIdiom'];
	if (userInterfaceIdiom !== 'tablet'){
		console.log("running on ios phone");
		return false
	}
	console.log("running on ios tablet")
	return true
}
export default fontSizes