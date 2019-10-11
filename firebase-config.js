import * as firebase from 'firebase';
import('firebase/database')
import Constants from 'expo-constants';

const firebaseApp = firebase.initializeApp(Constants.manifest.extra.firebaseConfig);

export { firebaseApp }
