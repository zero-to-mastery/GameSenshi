// firebase
import firebase from 'firebase/app'
import 'firebase/auth' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/firestore'

import { onAuthChanged } from 'firebaseInit/onAuthChanged'
import { getRedirectResult } from 'firebaseInit/getRedirectResult'

import { fbfsSettingsGeneral } from 'constantValues'

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

const functions = firebase.functions()

const firestore = firebase.firestore()

// load default storage bucket
const firebaseDefaultStorage = firebase.storage()

const auth = firebase.auth

// use device default language
auth().useDeviceLanguage()

// user auth listener
auth().onAuthStateChanged(userAuth => {
	onAuthChanged(userAuth, (next, error) =>
		firestore
			.doc(fbfsSettingsGeneral(userAuth))
			.onSnapshot({ includeMetadataChanges: true }, { next, error }, error)
	)
})

// listener to get back sign in token from federated identity provider
getRedirectResult(auth().getRedirectResult(), auth)

export { functions, firebase, auth, firebaseDefaultStorage, firestore }
