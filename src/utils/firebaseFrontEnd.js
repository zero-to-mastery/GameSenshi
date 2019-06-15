import React from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'
import {
	alertStore,
	socialAuthModalStore,
	userStore,
	signInModalStore,
} from 'state'
import {
	SOCIAL_AUTH_MODAL_BODY,
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_LOADER,
	SOCIAL_AUTH_MODAL_CALLBACK,
	ALERT_BODY,
	ALERT_OPEN,
	ALERT_COLOR,
	USER_UID,
	USER_EMAIL,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
	USER_EMAIL_IS_VERIFIED,
	DEFAULT_AVATAR_URL,
	SIGN_IN_MODAL_EMAIL,
	SIGN_IN_MODAL_OPEN,
	SIGN_IN_MODAL_CALLBACK,
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

// load default storage bucket
const storageRef = firebase.storage().ref()

const auth = firebase.auth

// use device default language
auth().useDeviceLanguage()

// user auth listener
auth().onAuthStateChanged(user => {
	console.log(user, 'Signed In!')
	if (user) {
		const {
			[USER_DISPLAY_NAME]: displayName,
			[USER_DISPLAY_NAME]: email,
			[USER_EMAIL]: emailVerified,
			[USER_PHOTO_URL]: photoURL,
			[USER_UID]: uid,
		} = user
		userStore.setState({
			[USER_DISPLAY_NAME]: displayName,
			[USER_EMAIL]: email,
			[USER_EMAIL_IS_VERIFIED]: emailVerified,
			[USER_PHOTO_URL]: photoURL || process.env[DEFAULT_AVATAR_URL], //fallback
			[USER_UID]: uid,
			[USER_SIGNED_IN]: true,
		})
		localStorage.setItem(
			'user',
			JSON.stringify({
				displayName,
				email,
				emailVerified,
				photoURL,
				uid,
			})
		)
	} else {
		// User signed out.
		userStore.setState({
			[USER_UID]: '',
			[USER_DISPLAY_NAME]: '',
			[USER_EMAIL]: '',
			[USER_EMAIL_IS_VERIFIED]: false,
			[USER_PHOTO_URL]: '',
			[USER_SIGNED_IN]: false,
		})
		localStorage.removeItem('user')
	}
})

// listener to get back sign in token from federated identity provider
auth()
	.getRedirectResult()
	.then(result => {
		// close modal if successful
		socialAuthModalStore.setState({ [SOCIAL_AUTH_MODAL_OPEN]: false })
		const isLinked = sessionStorage.getItem('linking successful?')
		sessionStorage.removeItem('linking successful?')
		if (isLinked) {
			alertStore.setState({
				[ALERT_BODY]: 'Social login linked successful!',
				[ALERT_OPEN]: true,
				[ALERT_COLOR]: 'success',
			})
		}

		// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
		const provider2 = sessionStorage.getItem('provider2')
		sessionStorage.removeItem('provider2')
		if (provider2) {
			// show modal on link redirect
			sessionStorage.setItem(
				'linking successful?',
				provider2.replace('AuthProvider', '')
			)
			result.user.linkWithRedirect(new auth[provider2]())
		}
	})
	.catch(err => {
		// close modal if error
		socialAuthModalStore.setState({ [SOCIAL_AUTH_MODAL_OPEN]: false })
		// remove this item whether it is success or not
		sessionStorage.removeItem('linking successful?')
		// An error happened.
		// need to save this credential before hand in cache, remember delete it later.
		const { code, credential, email } = err
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
						signInModalStore.setState({
							[SIGN_IN_MODAL_EMAIL]: email,
							[SIGN_IN_MODAL_OPEN]: true,
							[SIGN_IN_MODAL_CALLBACK]: () => {},
						})
					} else {
						socialAuthModalStore.setState({
							[SOCIAL_AUTH_MODAL_BODY]: (
								<>
									It seem like you already registered with <b>{name1}</b>, we
									will try to link both of your <b>{name1}</b> and{' '}
									<b>{name2}</b> social login by signing you in with{' '}
									<b>{name1}</b> first then <b>{name2}</b>. Please click{' '}
									<b>Continue</b> to link your account.
								</>
							),
							[SOCIAL_AUTH_MODAL_OPEN]: true,
							[SOCIAL_AUTH_MODAL_TITLE]: 'Linking Your Social Login',
							[SOCIAL_AUTH_MODAL_LOADER]: false,
							[SOCIAL_AUTH_MODAL_CALLBACK]: () => {
								sessionStorage.setItem('showAuthLinkingModal', name2)
								sessionStorage.setItem('provider2', provider2)
								auth().signInWithRedirect(new auth[provider1]())
							},
						})
						//continue on getRedirectResult event listener
					}
				})
		}
	})

const functions = firebase.functions()

export { functions, firebase, auth, storageRef }
