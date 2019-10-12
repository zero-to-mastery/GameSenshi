import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
// routing and api
import { setLastRoute, toIndexIfPublic } from 'routes'
import { handleSignInWithSocials } from 'api'
// state
import { storeModalShow, storeModalSetItem } from 'state'

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
			storeModalShow(title, body, true)
			const body2 = reactElementToJSXString(
				<span>
					Signing in with <b>{provider}</b>...
					<br />
					<br />
					Almost there!
				</span>
			)
			const title2 = 'Signing You In...'
			storeModalSetItem(title2, body2)
			setLastRoute(toIndexIfPublic(lastLocation))
			onSignIn()
		}
	})
}

export { buttonSocialAuthOnClicks }
