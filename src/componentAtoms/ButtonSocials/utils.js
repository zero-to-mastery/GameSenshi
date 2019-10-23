import React from 'react'
import {
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
	BUTTON_SOCIALS_HREF,
} from './ButtonSocials'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { setLastRoute, toIndexIfPublic } from 'routes'
import { handleSignInWithSocials } from 'api'
import { storeModalShow, storeModalSetItem } from 'state'
import {
	FB_FS_CHANNELS_FACEBOOK,
	FB_FS_CHANNELS_TWITCH,
	FB_FS_CHANNELS_YOUTUBE,
} from 'constantValues'

const GOOGLE = 'Google'
const FACEBOOK = 'facebook'

const options = [
	{
		[BUTTON_SOCIALS_ID]: GOOGLE,
		[BUTTON_SOCIALS_ICON]: 'fab fa-google',
		[BUTTON_SOCIALS_COLOR]: 'google',
		[BUTTON_SOCIALS_TOOLTIP]: 'Sign in with Google!',
	},
	{
		[BUTTON_SOCIALS_ID]: FACEBOOK,
		[BUTTON_SOCIALS_ICON]: 'fab fa-facebook-square',
		[BUTTON_SOCIALS_COLOR]: 'facebook',
		[BUTTON_SOCIALS_TOOLTIP]: 'Sign in with Facebook!',
	},
	{
		[BUTTON_SOCIALS_ID]: FB_FS_CHANNELS_FACEBOOK,
		[BUTTON_SOCIALS_ICON]: 'fab fa-facebook-f font-1-6',
		[BUTTON_SOCIALS_COLOR]: 'facebook',
		[BUTTON_SOCIALS_TOOLTIP]: 'Follow me on my Facebook!',
	},
	{
		[BUTTON_SOCIALS_ID]: FB_FS_CHANNELS_TWITCH,
		[BUTTON_SOCIALS_ICON]: 'fab fa-twitch font-1-6',
		[BUTTON_SOCIALS_COLOR]: 'twitch',
		[BUTTON_SOCIALS_TOOLTIP]: 'Subscribe to my Twitch channel!',
	},
	{
		[BUTTON_SOCIALS_ID]: FB_FS_CHANNELS_YOUTUBE,
		[BUTTON_SOCIALS_ICON]: 'ml-n1 fab fa-youtube font-1-6',
		[BUTTON_SOCIALS_COLOR]: 'youtube',
		[BUTTON_SOCIALS_TOOLTIP]: 'Subscribe to my Youtube channel!',
	},
]

const buttonSocialAuthOnClick = lastLocation => {
	return (e, button) => {
		const { [BUTTON_SOCIALS_ID]: id } = button
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
		if (id === GOOGLE) {
			handleSignInWithSocials[0]()
		} else if (id === FACEBOOK) {
			handleSignInWithSocials[1]()
		}
	}
}

const buttonSocialAuths = options.slice(0, 2)

const getButtons = buttons => {
	const getButtons_ = []
	for (var prop in buttons) {
		getButtons_.push({
			...options.find(option => option[BUTTON_SOCIALS_ID] === prop),
			[BUTTON_SOCIALS_HREF]: buttons[prop],
		})
	}
	return getButtons_
}

export { buttonSocialAuthOnClick, getButtons, buttonSocialAuths }
