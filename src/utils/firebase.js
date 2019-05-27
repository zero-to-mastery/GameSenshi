import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth

// user auth listener
auth().onAuthStateChanged(function(user) {
	console.log(user, 'Signed In!')
	if (user) {
		// User is signed in.
	} else {
		// User is signed out.
	}
})

const functions = firebase.functions()

export { functions, firebase, auth }
