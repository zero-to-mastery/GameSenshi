import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
// routing and api
import { setLastRoute } from 'routes'
import { handleSignInWithSocials } from 'api'
// state
import { storeAuthModalShow, storeAuthModalSetItem } from 'state'

const providers = ['Google', 'Facebook']

const buttonSocialAuthOnClicks = lastLocation => {
	return providers.map((provider, i) => {
		const onSignIn = handleSignInWithSocials[i]

		return () => {
			const body = (
				<>
					Please wait while we signing you in with <b>{provider}</b>.
				</>
			)
			const title = 'Signing You In...'
			storeAuthModalShow(title, body, true)
			const body2 = reactElementToJSXString(
				<span>
					Signing in with <b>{provider}</b>...
					<br />
					<br />
					Almost there!
				</span>
			)
			const title2 = 'Signing You In...'
			storeAuthModalSetItem(title2, body2)
			setLastRoute(lastLocation)
			onSignIn()
		}
	})
}

export { buttonSocialAuthOnClicks }
