import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import { socialAuthModalStore } from 'state'
import {
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_CALLBACK,
	SOCIAL_AUTH_MODAL_PROVIDER_1,
	SOCIAL_AUTH_MODAL_PROVIDER_2,
} from 'constantValues'

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

// use device default language
auth().useDeviceLanguage()

// user auth listener
auth().onAuthStateChanged(function(user) {
	console.log(user, 'Signed In!')
	if (user) {
		// User is signed in.
		// var displayName = user.displayName;
		// var email = user.email;
		// var emailVerified = user.emailVerified;
		// var photoURL = user.photoURL;
		// var isAnonymous = user.isAnonymous;
		// var uid = user.uid;
		// var providerData = user.providerData;
	} else {
		// User is signed out.
	}
})

// listener to get back sign in token from federated identity provider
auth()
	.getRedirectResult()
	.then(result => {
		// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
		const provider2 = sessionStorage.getItem('provider2')
		sessionStorage.removeItem('provider2')
		if (provider2) {
			result.user.linkWithRedirect(new auth[provider2]())
		}
	})
	.catch(err => {
		console.log('failed auth', err)
		// An error happened.
		// need to save this credential before hand in cache, remember delete it later.
		const { code, credential, email } = err
		console.log(credential)
		if (code === 'auth/account-exists-with-different-credential') {
			auth()
				.fetchSignInMethodsForEmail(email)
				.then(methods => {
					const getProvider = method =>
						method === 'google.com'
							? 'GoogleAuthProvider'
							: method === 'facebook.com'
							? 'FacebookAuthProvider'
							: method === 'twitter.com'
							? 'TwitterAuthProvider'
							: method === 'password'
							? 'password'
							: undefined

					const getName = string =>
						(string.charAt(0).toUpperCase() + string.slice(1)).replace(
							'.com',
							''
						)

					const provider1 = getProvider(methods[0])
					const provider2 = getProvider(credential.signInMethod)
					const name1 = getName(methods[0])
					const name2 = getName(credential.signInMethod)
					if (provider1 === 'password') {
						//handle password case
					} else {
						socialAuthModalStore.setState({
							[SOCIAL_AUTH_MODAL_TITLE]: 'Linking Your Social Login',
							[SOCIAL_AUTH_MODAL_OPEN]: true,
							[SOCIAL_AUTH_MODAL_CALLBACK]: () => {
								sessionStorage.setItem('showAuth', name2)
								sessionStorage.setItem('provider2', provider2)
								auth().signInWithRedirect(new auth[provider1]())
							},
							[SOCIAL_AUTH_MODAL_PROVIDER_1]: name1,
							[SOCIAL_AUTH_MODAL_PROVIDER_2]: name2,
						})
						//continue on getRedirectResult .then
					}
				})
		}
	})

const functions = firebase.functions()

export { functions, firebase, auth }
