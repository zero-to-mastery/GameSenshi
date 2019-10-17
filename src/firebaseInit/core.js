import firebase from 'firebase/app'
import 'firebase/auth' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/firestore'

const env = process.env

const firebaseConfig = {
	apiKey: env.REACT_APP_API_KEY,
	authDomain: env.REACT_APP_AUTH_DOMAIN,
	databaseURL: env.REACT_APP_DATABASE_URL,
	projectId: env.REACT_APP_PROJECT_ID,
	storageBucket: env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
	appId: env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const firefunct = firebase.functions()

const firestore = firebase.firestore()

const auth = firebase.auth

const firebaseStorage = firebase.storage()

// use device default language
auth().useDeviceLanguage()

export { firefunct, firestore, auth, firebaseStorage }
