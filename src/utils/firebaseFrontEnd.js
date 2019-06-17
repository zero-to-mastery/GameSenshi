import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

//firebase
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

// states
import {
	alertStore,
	authModalStore,
	userStore,
	signInModalStore,
	authStore,
} from 'state'
import * as allStore from 'state'

// constants
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
	EMAIL,
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
	authModalStore.setState({ [SOCIAL_AUTH_MODAL_OPEN]: false })
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
		for (let store in allStore) {
			allStore[store].resetState && allStore[store].resetState()
		}
		localStorage.removeItem('user')
	}
})

const handleDifferentCredential = (auth, email, credential) => {
	auth()
		.fetchSignInMethodsForEmail(email)
		.then(async methods => {
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

			const getName = (
				string // remove .com and capitalized 1st letter
			) =>
				(string.charAt(0).toUpperCase() + string.slice(1)).replace('.com', '')

			const provider1 = getProvider(methods[0])
			const provider2 = getProvider(credential.signInMethod)
			const name1 = provider1 === 'password' ? email : getName(methods[0])
			const name2 =
				provider2 === 'password' ? email : getName(credential.signInMethod)
			await authModalStore.setState({
				[SOCIAL_AUTH_MODAL_OPEN]: false,
			}) // close modal if error
			setTimeout(() => {
				authModalStore.setState({
					[SOCIAL_AUTH_MODAL_OPEN]: true,
					[SOCIAL_AUTH_MODAL_BODY]: (
						<>
							It seem like you already registered with <b>{name1}</b>, we will
							try to link both of your <b>{name1}</b> and
							<b> {name2}</b> social login by signing you in with
							<b> {name1}</b> first then <b>{name2}. </b>
							<br />
							<br />
							Please click
							<b> Continue</b> to link your account.
						</>
					),
					[SOCIAL_AUTH_MODAL_TITLE]: 'Linking Your Social Login',
					[SOCIAL_AUTH_MODAL_LOADER]: false,
					[SOCIAL_AUTH_MODAL_CALLBACK]: async () => {
						await authModalStore.setState({
							[SOCIAL_AUTH_MODAL_OPEN]: false,
						})
						if (provider1 === 'password') {
							authStore.setState({ [EMAIL]: email })
							signInModalStore.setState({
								[SIGN_IN_MODAL_EMAIL]: email,
								[SIGN_IN_MODAL_OPEN]: true,
								[SIGN_IN_MODAL_CALLBACK]: async () => {
									if (signInModalStore.state[SIGN_IN_MODAL_OPEN]) {
										await signInModalStore.setState({
											[SIGN_IN_MODAL_OPEN]: false,
										})
										await authModalStore.setState({
											[SOCIAL_AUTH_MODAL_OPEN]: true,
											[SOCIAL_AUTH_MODAL_BODY]: (
												<>
													Linking<b> {name1} </b>to<b> {name2} </b>
													<br />
													<br />
													Please Wait...
												</>
											),
											[SOCIAL_AUTH_MODAL_TITLE]: 'Linking Your Social Login',
											[SOCIAL_AUTH_MODAL_LOADER]: true,
										})
										auth()
											.currentUser.linkWithCredential(credential)
											.then(async () => {
												await authModalStore.setState({
													[SOCIAL_AUTH_MODAL_OPEN]: false,
												})
												alertStore
													.setState({
														[ALERT_BODY]: 'Social login linked successful!',
														[ALERT_OPEN]: true,
														[ALERT_COLOR]: 'success',
													})
													.catch(async () => {
														await authModalStore.setState({
															[SOCIAL_AUTH_MODAL_OPEN]: false,
														})
														alertStore.setState({
															[ALERT_BODY]: 'Social login linked unsuccessful!',
															[ALERT_OPEN]: true,
															[ALERT_COLOR]: 'warning',
														})
													})
											})
									}
								},
							})
						} else {
							// need to save this credential before hand in cache, remember delete it later.
							sessionStorage.setItem(
								'authModal',
								JSON.stringify({
									credential,
									provider2,
									name1,
									name2,
									[SOCIAL_AUTH_MODAL_BODY]: reactElementToJSXString(
										<span>
											Please wait while we signing you in with
											<b> {name1}. </b>
											<br />
											<br />
											After that we will signing you in with
											<b> {name2}. </b>
										</span>
									),
									[SOCIAL_AUTH_MODAL_TITLE]: 'Signing You In...',
									isLinked: false,
								})
							)
							auth().signInWithRedirect(new auth[provider1]())
						}
					},
				})
			}, 150)
			//continue on getRedirectResult event listener
		})
}

// listener to get back sign in token from federated identity provider
auth()
	.getRedirectResult()
	.then(result => {
		// close modal if successful
		const authModal = JSON.parse(sessionStorage.getItem('authModal'))
		const {
			name1,
			name2,
			isLinked,
			provider2,
			//credential
		} = authModal
		if (isLinked) {
			sessionStorage.removeItem('authModal')
			alertStore.setState({
				[ALERT_BODY]: `Successfully linked your ${name2} account!`,
				[ALERT_OPEN]: true,
				[ALERT_COLOR]: 'success',
			})
		} else if (authModal) {
			// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
			// show modal on link redirect
			sessionStorage.setItem(
				'authModal',
				JSON.stringify({
					...authModal,
					[SOCIAL_AUTH_MODAL_BODY]: reactElementToJSXString(
						<span>
							Please wait while we linking your
							<b> {name2} </b>
							account to your<b> {name1} </b>account.
						</span>
					),
					[SOCIAL_AUTH_MODAL_TITLE]: 'Linking...',
					isLinked: true,
				})
			)
			// if (provider2 === 'password') {
			// 	console.log('i am here 5566')
			// 	//	! something wrong with linkWithCredential
			// 	console.log(auth().currentUser.linkWithCredential(credential))
			// 	console
			// 		.log('i am done 5566')
			// 		.then(() => {
			// 			console.log('success')
			// 			sessionStorage.removeItem('authModal')
			// 			alertStore.setState({
			// 				[ALERT_BODY]: `Successfully linked your ${name2} account!`,
			// 				[ALERT_OPEN]: true,
			// 				[ALERT_COLOR]: 'success',
			// 			})
			// 		})
			// 		.catch(() => {
			// 			console.log('failed')
			// 			sessionStorage.removeItem('authModal')
			// 			alertStore.setState({
			// 				[ALERT_BODY]: `Failed to linked your ${name2} account!`,
			// 				[ALERT_OPEN]: true,
			// 				[ALERT_COLOR]: 'warning',
			// 			})
			// 		})
			// } else {
			result.user.linkWithRedirect(new auth[provider2]())
			//}
		}
	})
	.catch(err => {
		// remove this item whether it is success or not
		sessionStorage.removeItem('authModal')
		const { code, credential, email } = err
		if (code === 'auth/account-exists-with-different-credential') {
			handleDifferentCredential(auth, email, credential)
		}
	})

const functions = firebase.functions()

export { functions, firebase, auth, storageRef, handleDifferentCredential }
