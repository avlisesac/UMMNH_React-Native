import * as firebase from 'firebase';
//import 'firebase/analytics';
import Constants from 'expo-constants';


firebase.initializeApp(Constants.manifest.extra.firebaseConfig);