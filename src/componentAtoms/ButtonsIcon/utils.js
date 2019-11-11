import React from 'react'
import {
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
	BUTTONS_ICON_HREF,
} from './ButtonsIcon'
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
const FACEBOOK = 'Facebook'

const options = [
	{
		[BUTTONS_ICON_ID]: GOOGLE,
		[BUTTONS_ICON_ICON]: 'fab fa-google',
		[BUTTONS_ICON_COLOR]: 'google',
		[BUTTONS_ICON_TOOLTIP]: 'Sign in with Google!',
	},
	{
		[BUTTONS_ICON_ID]: FACEBOOK,
		[BUTTONS_ICON_ICON]: 'fab fa-facebook-square',
		[BUTTONS_ICON_COLOR]: 'facebook',
		[BUTTONS_ICON_TOOLTIP]: 'Sign in with Facebook!',
	},
	{
		[BUTTONS_ICON_ID]: FB_FS_CHANNELS_FACEBOOK,
		[BUTTONS_ICON_ICON]: 'fab fa-facebook-f font-1-6',
		[BUTTONS_ICON_COLOR]: 'facebook',
		[BUTTONS_ICON_TOOLTIP]: 'Follow me on my Facebook!',
	},
	{
		[BUTTONS_ICON_ID]: FB_FS_CHANNELS_TWITCH,
		[BUTTONS_ICON_ICON]: 'fab fa-twitch font-1-6',
		[BUTTONS_ICON_COLOR]: 'twitch',
		[BUTTONS_ICON_TOOLTIP]: 'Subscribe to my Twitch channel!',
	},
	{
		[BUTTONS_ICON_ID]: FB_FS_CHANNELS_YOUTUBE,
		[BUTTONS_ICON_ICON]: 'ml-n1 fab fa-youtube font-1-6',
		[BUTTONS_ICON_COLOR]: 'youtube',
		[BUTTONS_ICON_TOOLTIP]: 'Subscribe to my Youtube channel!',
	},
]

const options_ = () => {
	const ids = options.map(option => option[BUTTONS_ICON_ID])
	if (ids.length !== new Set(ids).size) {
		throw 'duplicated id'
	} else {
		return options
	}
}

const buttonIconAuthOnClick = lastLocation => {
	return (e, button) => {
		const { [BUTTONS_ICON_ID]: id } = button
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

const buttonIconAuths = { [GOOGLE]: '', [FACEBOOK]: '' }

const getButtonsIcon = buttons => {
	const getButtons = []
	for (var prop in buttons) {
		getButtons.push({
			...options_().find(option => option[BUTTONS_ICON_ID] === prop),
			...(buttons[prop] && { [BUTTONS_ICON_HREF]: buttons[prop] }),
		})
	}
	return getButtons
}

export { buttonIconAuthOnClick, getButtonsIcon, buttonIconAuths }
