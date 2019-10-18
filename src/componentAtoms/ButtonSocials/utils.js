import React from 'react'
import {
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
} from './ButtonSocials'
import reactElementToJSXString from 'react-element-to-jsx-string'
// routing and api
import { setLastRoute, toIndexIfPublic } from 'routes'
import { handleSignInWithSocials } from 'api'
// state
import { storeModalShow, storeModalSetItem } from 'state'

const buttonAuths = [
	{
		[BUTTON_SOCIALS_ID]: 'Google',
		[BUTTON_SOCIALS_ICON]: 'fab fa-google',
		[BUTTON_SOCIALS_COLOR]: 'google',
		[BUTTON_SOCIALS_TOOLTIP]: 'Sign in with Google!',
	},
	{
		[BUTTON_SOCIALS_ID]: 'Facebook',
		[BUTTON_SOCIALS_ICON]: 'fab fa-facebook-square',
		[BUTTON_SOCIALS_COLOR]: 'facebook',
		[BUTTON_SOCIALS_TOOLTIP]: 'Sign in with Facebook!',
	},
]
const buttonSocialAuthOnClicks = lastLocation => {
	return buttonAuths.map((buttonAuth, i) => {
		const { [BUTTON_SOCIALS_ID]: id } = buttonAuth
		const onSignIn = handleSignInWithSocials[i]

		return () => {
			const body = (
				<>
					Please wait while we signing you in with <b>{id}</b>.
				</>
			)
			const title = 'Signing You In...'
			storeModalShow(title, body, true)
			const body2 = reactElementToJSXString(
				<span>
					Signing in with <b>{id}</b>...
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

export { buttonSocialAuthOnClicks, buttonAuths }
