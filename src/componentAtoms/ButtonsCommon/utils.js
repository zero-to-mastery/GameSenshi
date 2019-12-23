import React from 'react'
import {
	BUTTONS_COMMON_ID,
	BUTTONS_COMMON_ICON,
	BUTTONS_COMMON_COLOR,
	BUTTONS_COMMON_TOOLTIP,
	BUTTONS_COMMON_HREF,
	BUTTONS_COMMON_LABEL,
	BUTTONS_COMMON_CLASS,
	BUTTONS_COMMON_TO,
	BUTTONS_COMMON_BASE_CLASS,
} from './ButtonsCommon'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { setLastRoute, toIndexIfPublic } from 'routes'
import { handleSignInWithSocials } from 'api'
import { storeModalShow, storeModalSetItem } from 'state'
import {
	FB_FS_CHANNELS_FACEBOOK,
	FB_FS_CHANNELS_TWITCH,
	FB_FS_CHANNELS_YOUTUBE,
	API_GOOGLE,
	API_FACEBOOK,
	API_TWITCH,
} from 'constantValues'
import { ROUTE_PAGE_CHECKOUT, ROUTE_PAGE_CHAT } from 'routes'
import { checkDuplicatedObject } from 'utils'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { ICON_ICON } = stopUndefined(Exports)

const CHECKOUT = 'checkout'
const CHAT = 'chat'

const options = [
	{
		[BUTTONS_COMMON_ID]: API_GOOGLE,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-google' },
		[BUTTONS_COMMON_COLOR]: 'google',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Google!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: API_FACEBOOK,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-facebook-square' },
		[BUTTONS_COMMON_COLOR]: 'facebook',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Facebook!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: API_TWITCH,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-twitch' },
		[BUTTONS_COMMON_COLOR]: 'twitch',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Twitch!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: FB_FS_CHANNELS_FACEBOOK,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-facebook-f font-1-6' },
		[BUTTONS_COMMON_COLOR]: 'facebook',
		[BUTTONS_COMMON_TOOLTIP]: 'Follow me on my Facebook!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: FB_FS_CHANNELS_TWITCH,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-twitch font-1-6' },
		[BUTTONS_COMMON_COLOR]: 'twitch',
		[BUTTONS_COMMON_TOOLTIP]: 'Subscribe to my Twitch channel!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: FB_FS_CHANNELS_YOUTUBE,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'fab fa-youtube font-1-6' },
		[BUTTONS_COMMON_COLOR]: 'youtube',
		[BUTTONS_COMMON_TOOLTIP]: 'Subscribe to my Youtube channel!',
		[BUTTONS_COMMON_CLASS]: 'btn-icon btn-round',
	},
	{
		[BUTTONS_COMMON_ID]: CHAT,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'tim-icons icon-chat-33' },
		[BUTTONS_COMMON_COLOR]: 'success',
		[BUTTONS_COMMON_LABEL]: 'Chat',
		[BUTTONS_COMMON_BASE_CLASS]: 'w-100',
		[BUTTONS_COMMON_TO]: ROUTE_PAGE_CHAT,
		[BUTTONS_COMMON_CLASS]: 'w-100',
	},
	{
		[BUTTONS_COMMON_ID]: CHECKOUT,
		[BUTTONS_COMMON_ICON]: { [ICON_ICON]: 'tim-icons icon-cart' },
		[BUTTONS_COMMON_COLOR]: 'warning',
		[BUTTONS_COMMON_LABEL]: 'Checkout',
		[BUTTONS_COMMON_BASE_CLASS]: 'w-100',
		[BUTTONS_COMMON_TO]: ROUTE_PAGE_CHECKOUT,
		[BUTTONS_COMMON_CLASS]: 'w-100',
	},
]

const buttonCommonAuthOnClick = lastLocation => {
	return (e, button) => {
		const { [BUTTONS_COMMON_ID]: id } = button
		const body = (
			<>
				Please wait while we signing you in with{' '}
				<b className='text-success'>{id}</b>.
			</>
		)
		const title = 'Signing You In...'
		storeModalShow(title, body, true)
		const body2 = reactElementToJSXString(
			<span>
				Signing in with <b className='text-success'>{id}</b>...
				<br />
				<br />
				Almost there!
			</span>
		)
		const title2 = 'Signing You In...'
		storeModalSetItem(title2, body2)
		setLastRoute(toIndexIfPublic(lastLocation))
		handleSignInWithSocials[id]()
	}
}

const buttonsCommonAuth = {
	[API_GOOGLE]: '',
	[API_FACEBOOK]: '',
	[API_TWITCH]: '',
}

const buttonsCommonChatAndCheckout = { [CHAT]: '', [CHECKOUT]: '' }

const getButtonsCommon = buttons => {
	const getButtons = []
	checkDuplicatedObject(options, BUTTONS_COMMON_ID)
	for (let prop in buttons) {
		getButtons.push({
			...options.find(option => option[BUTTONS_COMMON_ID] === prop),
			...(buttons[prop] && { [BUTTONS_COMMON_HREF]: buttons[prop] }),
		})
	}
	return getButtons
}

export {
	buttonCommonAuthOnClick,
	getButtonsCommon,
	buttonsCommonAuth,
	buttonsCommonChatAndCheckout,
}
