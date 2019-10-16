import React from 'react'
import { ID, ICON, COLOR, TOOLTIP } from './ButtonSocials'
import reactElementToJSXString from 'react-element-to-jsx-string'
// routing and api
import { setLastRoute, toIndexIfPublic } from 'routes'
import { handleSignInWithSocials } from 'api'
// state
import { storeModalShow, storeModalSetItem } from 'state'

const buttonAuths = [
	{
		[ID]: 'Google',
		[ICON]: 'fab fa-google',
		[COLOR]: 'google',
		[TOOLTIP]: 'Sign in with Google!',
	},
	{
		[ID]: 'Facebook',
		[ICON]: 'fab fa-facebook-square',
		[COLOR]: 'facebook',
		[TOOLTIP]: 'Sign in with Facebook!',
	},
]
const buttonSocialAuthOnClicks = lastLocation => {
	return buttonAuths.map((buttonAuth, i) => {
		const { [ID]: id } = buttonAuth
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

const buttonStreams = [
	{
		[ID]: 'facebook',
		[ICON]: 'fab fa-facebook-f',
		[COLOR]: 'facebook',
		[TOOLTIP]: 'Connect via Facebook',
	},
	{
		[ID]: 'twitch',
		[ICON]: 'fab fa-twitch',
		[COLOR]: 'twitch',
		[TOOLTIP]: 'Connect via Twitch',
	},
	{
		[ID]: 'youtube',
		[ICON]: 'fab fa-youtube',
		[COLOR]: 'youtube',
		[TOOLTIP]: 'Connect via Youtube',
	},
]

export { buttonSocialAuthOnClicks, buttonAuths, buttonStreams }
