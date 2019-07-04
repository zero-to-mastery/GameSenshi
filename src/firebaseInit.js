import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

//firebase
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

// states
import { alertStore, modalStore, userStore, signInStore } from 'state'
import * as allStore from 'state'

// constants
import {
	MODAL_BODY,
	MODAL_OPEN,
	MODAL_TITLE,
	MODAL_LOADER,
	MODAL_CALLBACK,
	USER_UID,
	USER_EMAIL,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
	DEFAULT_AVATAR_URL,
	SIGN_IN_EMAIL,
	SIGN_IN_OPEN,
	SIGN_IN_CALLBACK,
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

const handleDifferentCredential = (auth, email, credential) => {
	auth()
		.fetchSignInMethodsForEmail(email)
		.then(async methods => {
			const getProvider = method => {
				switch (method) {
					case 'google.com':
						return 'GoogleAuthProvider'
					case 'facebook.com':
						return 'FacebookAuthProvider'
					case 'twitter.com':
						return 'TwitterAuthProvider'
					case 'password':
						return 'password'
					default:
						return undefined
				}
			}

			const getName = (
				string // remove .com and capitalized 1st letter
			) =>
				(string.charAt(0).toUpperCase() + string.slice(1)).replace('.com', '')

			const provider1 = getProvider(methods[0])
			const provider2 = getProvider(credential.signInMethod)
			const name1 = provider1 === 'password' ? email : getName(methods[0])
			const name2 =
				provider2 === 'password' ? email : getName(credential.signInMethod)
			await modalStore.setState({
				[MODAL_OPEN]: false,
			}) // close modal if error
			setTimeout(() => {
				modalStore.setState({
					[MODAL_OPEN]: true,
					[MODAL_BODY]: (
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
					[MODAL_TITLE]: 'Linking Your Social Login',
					[MODAL_LOADER]: false,
					[MODAL_CALLBACK]: async () => {
						await modalStore.setState({
							[MODAL_OPEN]: false,
						})
						if (provider1 === 'password') {
							signInStore.setState({
								[SIGN_IN_EMAIL]: email,
								[SIGN_IN_OPEN]: true,
								[SIGN_IN_CALLBACK]: async () => {
									if (signInStore.state[SIGN_IN_OPEN]) {
										await signInStore.setState({
											[SIGN_IN_OPEN]: false,
										})
										await modalStore.setState({
											[MODAL_OPEN]: true,
											[MODAL_BODY]: (
												<>
													Linking<b> {name1} </b>to<b> {name2} </b>
													<br />
													<br />
													Please Wait...
												</>
											),
											[MODAL_TITLE]: 'Linking Your Social Login',
											[MODAL_LOADER]: true,
										})
										auth()
											.currentUser.linkWithCredential(credential)
											.then(async () => {
												await modalStore.setState({
													[MODAL_OPEN]: false,
												})
												alertStore.open(
													'Social login linked successful!',
													'success'
												)
											})
											.catch(async () => {
												await modalStore.setState({
													[MODAL_OPEN]: false,
												})
												alertStore.open(
													'Social login linked unsuccessful!',
													'danger'
												)
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
									[MODAL_BODY]: reactElementToJSXString(
										<span>
											Please wait while we signing you in with
											<b> {name1}. </b>
											<br />
											<br />
											After that we will signing you in with
											<b> {name2}. </b>
										</span>
									),
									[MODAL_TITLE]: 'Signing You In...',
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

// user auth listener
auth().onAuthStateChanged(signInData => {
	const authModal = JSON.parse(sessionStorage.getItem('authModal'))
	!authModal && modalStore.setState({ [MODAL_OPEN]: false })
	if (signInData) {
		const user = {
			[USER_DISPLAY_NAME]: signInData[USER_DISPLAY_NAME],
			[USER_EMAIL_IS_VERIFIED]: signInData[USER_EMAIL_IS_VERIFIED],
			[USER_PHOTO_URL]:
				signInData[USER_PHOTO_URL] || process.env[DEFAULT_AVATAR_URL], //fallback,
			[USER_UID]: signInData[USER_UID],
		}
		userStore.setState(state => {
			return {
				...state,
				...user,
				[USER_EMAIL]: signInData[USER_EMAIL],
				[USER_PHONE_NUMBER]: signInData[USER_PHONE_NUMBER],
				[USER_PROVIDER_DATA]: signInData[USER_PROVIDER_DATA],
				[USER_SIGNED_IN]: true,
			}
		})
		// do not store sensitive information in localStorage
		localStorage.setItem(
			'user',
			JSON.stringify({
				...user,
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
			alertStore.open(
				<span>
					Successfully linked your <strong>{name2}</strong> account!
				</span>,
				'success'
			)
			sessionStorage.removeItem('authModal')
		} else if (authModal) {
			// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
			// show modal on link redirect
			sessionStorage.setItem(
				'authModal',
				JSON.stringify({
					...authModal,
					[MODAL_BODY]: reactElementToJSXString(
						<span>
							Please wait while we linking your
							<b> {name2} </b>
							account to your<b> {name1} </b>account.
						</span>
					),
					[MODAL_TITLE]: 'Linking...',
					isLinked: true,
				})
			)
			// if (provider2 === 'password') {
			// TODO allow user to create password account and link to existing social account
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
