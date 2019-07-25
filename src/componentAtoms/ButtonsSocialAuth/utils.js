import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
// routing and api
import { onSignedInRouting } from 'routes'
import { handleSignInWithGoogle, handleSignInWithFacebook } from 'api'
// state
import { authModalStoreShow, authModalStoreSetItem } from 'state'

const PROVIDER = 'provider'
const ON_SIGN_IN = 'onSignIn'
const apis = [
	{ [PROVIDER]: 'Google', [ON_SIGN_IN]: handleSignInWithGoogle },
	{ [PROVIDER]: 'Facebook', [ON_SIGN_IN]: handleSignInWithFacebook },
]

const buttonSocialAuthOnClicks = lastLocation => {
	return apis.map(api => {
		const { [PROVIDER]: provider, [ON_SIGN_IN]: onSignIn } = api
		return () => {
			const body = (
				<>
					Please wait while we signing you in with <b>{provider}</b>.
				</>
			)
			const title = 'Signing You In...'
			authModalStoreShow(title, body, true)
			const body2 = reactElementToJSXString(
				<span>
					Signing in with <b>{provider}</b>...
					<br />
					<br />
					Almost there!
				</span>
			)
			const title2 = 'Signing You In...'
			authModalStoreSetItem(title2, body2)
			onSignedInRouting(lastLocation)
			onSignIn()
		}
	})
}

export { buttonSocialAuthOnClicks }
