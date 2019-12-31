import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {
	storeAlertShow,
	storeSignInShow,
	storeModalShow,
	storeModalClose,
	storeModalSetItem,
	storeModalSimpleError,
	storeMNodalClear,
} from 'state'
import {
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_13,
	UNEXPECTED_ERROR_CODE_11,
	UNEXPECTED_ERROR_CODE_12,
	FUNCTION_EMAIL,
	FUNCTION_CUSTOM_TOKEN,
} from 'constantValues'
import { functSignInOther } from 'firebaseInit'

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
			return undefined
	}
}

const getName = string => {
	// remove .com and capitalized 1st letter
	return (string.charAt(0).toUpperCase() + string.slice(1)).replace('.com', '')
}

const handleDifferentCredential = async (auth, email, credential) => {
	let methods = []
	try {
		methods = await auth().fetchSignInMethodsForEmail(email)
	} catch (err) {
		return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_11)
	}
	if (methods.length === 0) {
		let otherTokenData = null
		try {
			otherTokenData = await functSignInOther({ [FUNCTION_EMAIL]: email })
		} catch (err) {
			return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_12)
		}
		if (otherTokenData) {
			return auth()
				.signInWithCustomToken(otherTokenData.data[FUNCTION_CUSTOM_TOKEN])
				.then(() => {
					storeMNodalClear()
				})
				.catch(err => {
					console.log(err)
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_13)
				})
		}
	} else {
		const provider1 = getProvider(methods[0])
		const provider2 = getProvider(credential.signInMethod)
		const name1 = provider1 === 'password' ? email : getName(methods[0])
		const name2 =
			provider2 === 'password' ? email : getName(credential.signInMethod)
		// close modal if any
		storeModalClose()
		setTimeout(() => {
			const body = (
				<>
					It seem like you already registered with{' '}
					<b className='text-info'>{name1}</b>, we will try to link both of your{' '}
					<b className='text-info'>{name1}</b> and
					<b className='text-success'> {name2}</b> social login by signing you
					in with
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
				storeModalClose()
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
					const restProps = {
						credential,
						provider2,
						name1,
						name2,
						isLinked: false,
						linking: true,
					}
					storeModalSetItem(title, body, restProps)
					auth().signInWithRedirect(new auth[provider1]())
				}
			})
		}, 150)
		//continue on getRedirectResult event listener
	}
}

export { handleDifferentCredential, linkedThen }
