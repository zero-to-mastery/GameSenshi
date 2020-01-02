import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {
	storeAlertShow,
	storeSignInShow,
	storeModalShow,
	storeModalClose,
	storeModalSetItem,
	storeModalSimpleError,
} from 'state'
import {
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_11,
	AUTH_TWITCH,
	ENV_VALUE_TWITCH_OAUTH_LINK,
} from 'constantValues'
import { auth } from 'firebaseInit/core'

const linkedThen = () => {
	storeModalClose()
	storeAlertShow(
		'Social login linked successful!',
		'success',
		'tim-icons icon-bell-55'
	)
}

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
			return AUTH_TWITCH
	}
}

const beautifyProviderName = string => {
	// remove .com and capitalized 1st letter
	return (string.charAt(0).toUpperCase() + string.slice(1)).replace('.com', '')
}

const handleDifferentCredential = async (email, credential) => {
	let methods = []
	try {
		methods = await auth().fetchSignInMethodsForEmail(email)
	} catch (err) {
		return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_11)
	}
	const provider1 = getProvider(methods[0])
	const provider2 = getProvider(credential.signInMethod)
	const name1 =
		provider1 === 'password'
			? email
			: beautifyProviderName(methods[0] ? methods[0] : AUTH_TWITCH)
	const name2 =
		provider2 === 'password'
			? email
			: beautifyProviderName(credential.signInMethod)

	const credentialInfo = {
		credential,
		provider2,
		name1,
		name2,
		isLinked: false,
		linking: true,
	}
	if (name1 === AUTH_TWITCH) {
		window.location = ENV_VALUE_TWITCH_OAUTH_LINK
		storeModalSetItem('Signing In', `Signing In With ${name2}`, credentialInfo)
	} else {
		const body = (
			<>
				It seem like you already registered with{' '}
				<b className='text-info'>{name1}</b>, we will try to link both of your{' '}
				<b className='text-info'>{name1}</b> and
				<b className='text-success'> {name2}</b> social login by signing you in
				with
				<b className='text-info'> {name1}</b> first then{' '}
				<b className='text-success'>{name2}. </b>
				<br />
				<br />
				Please click
				<b className='text-primary'> Continue</b> to link your account.
			</>
		)

		const title = 'Linking Your Social Login'
		storeModalShow(title, body, false, () => {
			if (provider1 === 'password') {
				storeSignInShow(email, () => {
					const body = (
						<>
							Linking<b className='text-info'> {name1} </b>to
							<b className='text-success'> {name2} </b>
							<br />
							<br />
							Please Wait...
						</>
					)
					const title = 'Linking Your Social Login'
					storeModalShow(title, body, true)
					auth()
						.currentUser.linkWithCredential(credential)
						.then(() => {
							linkedThen()
						})
						.catch(err => {
							storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_8[1])
						})
				})
			} else {
				// need to save this credential before hand in cache, remember delete it later.
				const body = reactElementToJSXString(
					<span>
						Please wait while we signing you in with
						<b className='text-info'> {name1}. </b>
						<br />
						<br />
						After that we will signing you in with
						<b className='text-success'> {name2}. </b>
					</span>
				)
				const title = 'Signing You In...'

				storeModalSetItem(title, body, credentialInfo)
				auth().signInWithRedirect(new auth[provider1]())
				//}
			}
		})
	}
	//continue on getRedirectResult event listener
}

export { handleDifferentCredential, linkedThen }
