import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
// states
import {
	storeAlertShow,
	storeSignInShow,
	storeModalShow,
	storeModalClose,
	storeModalSetItem,
} from 'state'

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
			// close modal if any
			await storeModalClose()
			setTimeout(() => {
				const body = (
					<>
						It seem like you already registered with <b>{name1}</b>, we will try
						to link both of your <b>{name1}</b> and
						<b> {name2}</b> social login by signing you in with
						<b> {name1}</b> first then <b>{name2}. </b>
						<br />
						<br />
						Please click
						<b> Continue</b> to link your account.
					</>
				)

				const title = 'Linking Your Social Login'
				storeModalShow(title, body, false, async () => {
					await storeModalClose()
					if (provider1 === 'password') {
						storeSignInShow(email, async () => {
							const body = (
								<>
									Linking<b> {name1} </b>to<b> {name2} </b>
									<br />
									<br />
									Please Wait...
								</>
							)
							const title = 'Linking Your Social Login'
							await storeModalShow(title, body, true)
							auth()
								.currentUser.linkWithCredential(credential)
								.then(async () => {
									await storeModalClose()
									storeAlertShow(
										'Social login linked successful!',
										'success',
										'tim-icons icon-bell-55'
									)
								})
								.catch(async () => {
									await storeModalClose()
									storeAlertShow(
										'Social login linked unsuccessful!',
										'danger',
										'tim-icons icon-alert-circle-exc'
									)
								})
						})
					} else {
						// need to save this credential before hand in cache, remember delete it later.
						const body = reactElementToJSXString(
							<span>
								Please wait while we signing you in with
								<b> {name1}. </b>
								<br />
								<br />
								After that we will signing you in with
								<b> {name2}. </b>
							</span>
						)
						const title = 'Signing You In...'
						const restProps = {
							credential,
							provider2,
							name1,
							name2,
							isLinked: false,
						}
						storeModalSetItem(title, body, restProps)
						auth().signInWithRedirect(new auth[provider1]())
					}
				})
			}, 150)
			//continue on getRedirectResult event listener
		})
}

export { handleDifferentCredential }
