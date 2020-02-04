import React from 'react'
import {
	BUTTONS_COMMON_ID,
	BUTTONS_COMMON_ICON,
	BUTTONS_COMMON_COLOR,
	BUTTONS_COMMON_TOOLTIP,
	BUTTONS_COMMON_HREF,
	BUTTONS_COMMON_LABEL,
	BUTTONS_COMMON_TO,
} from './ButtonsCommon'
import {
	setLastRoute,
	isLocationPublic,
	ROUTE_PAGE_CHECKOUT,
	ROUTE_PAGE_CHAT,
} from '2_routes'
import { handleSignInWithSocials } from '3_api'
import {
	STORE_USER_STATE_SIGNING_IN,
	storeModalSetItem,
	storeModalSimpleError,
} from '2_state'
import {
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_FACEBOOK,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_TWITCH,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_YOUTUBE,
	AUTH_GOOGLE,
	AUTH_FACEBOOK,
	AUTH_TWITCH,
	UNEXPECTED_ERROR_CODE_13,
} from '0_constantValues'
import { checkDuplicatedObject } from '1_utils'

const CHECKOUT = 'checkout'
const CHAT = 'chat'
const EDIT = 'edit'

const options = [
	{
		[BUTTONS_COMMON_ID]: AUTH_GOOGLE,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-google' />,
		[BUTTONS_COMMON_COLOR]: 'google',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Google!',
	},
	{
		[BUTTONS_COMMON_ID]: AUTH_FACEBOOK,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-facebook-f' />,
		[BUTTONS_COMMON_COLOR]: 'facebook',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Facebook!',
	},
	{
		[BUTTONS_COMMON_ID]: AUTH_TWITCH,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-twitch' />,
		[BUTTONS_COMMON_COLOR]: 'twitch',
		[BUTTONS_COMMON_TOOLTIP]: 'Sign in with Twitch!',
	},
	{
		[BUTTONS_COMMON_ID]: FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_FACEBOOK,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-facebook-f' />,
		[BUTTONS_COMMON_COLOR]: 'facebook',
		[BUTTONS_COMMON_TOOLTIP]: 'Follow me on my Facebook!',
	},
	{
		[BUTTONS_COMMON_ID]: FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_TWITCH,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-twitch' />,
		[BUTTONS_COMMON_COLOR]: 'twitch',
		[BUTTONS_COMMON_TOOLTIP]: 'Subscribe to my Twitch channel!',
	},
	{
		[BUTTONS_COMMON_ID]: FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_YOUTUBE,
		[BUTTONS_COMMON_ICON]: () => <i className='fab fa-youtube ' />,
		[BUTTONS_COMMON_COLOR]: 'youtube',
		[BUTTONS_COMMON_TOOLTIP]: 'Subscribe to my Youtube channel!',
	},
	{
		[BUTTONS_COMMON_ID]: EDIT,
		[BUTTONS_COMMON_ICON]: () => <i className='far fa-edit' />,
		[BUTTONS_COMMON_COLOR]: 'success',
		[BUTTONS_COMMON_TOOLTIP]: 'Click to Edit',
	},
	{
		[BUTTONS_COMMON_ID]: CHAT,
		[BUTTONS_COMMON_ICON]: () => <i className='tim-icons icon-chat-33' />,
		[BUTTONS_COMMON_COLOR]: 'success',
		[BUTTONS_COMMON_LABEL]: 'Chat',
		[BUTTONS_COMMON_TO]: ROUTE_PAGE_CHAT,
	},
	{
		[BUTTONS_COMMON_ID]: CHECKOUT,
		[BUTTONS_COMMON_ICON]: () => <i className='tim-icons icon-cart' />,
		[BUTTONS_COMMON_COLOR]: 'warning',
		[BUTTONS_COMMON_LABEL]: 'Checkout',
		[BUTTONS_COMMON_TO]: ROUTE_PAGE_CHECKOUT,
	},
]

const getVideoUrl = () => ({
	[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_FACEBOOK]:
		'https://www.facebook.com/',
	[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_TWITCH]: 'https://www.twitch.tv/',
	[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS_YOUTUBE]:
		'https://www.youtube.com/channel/',
})

const getButtonsCommon = buttons => {
	const getButtons = []
	checkDuplicatedObject(options, BUTTONS_COMMON_ID)
	for (let prop in buttons) {
		getButtons.push({
			...options.find(option => option[BUTTONS_COMMON_ID] === prop),
			...(buttons[prop] && {
				[BUTTONS_COMMON_HREF]: getVideoUrl()[prop] + buttons[prop],
			}),
		})
	}
	return getButtons
}

const buttonCommonAuthOnClick = lastLocation => {
	return (e, button) => {
		const { [BUTTONS_COMMON_ID]: id } = button
		storeModalSetItem(null, null, { [STORE_USER_STATE_SIGNING_IN]: true })
		setLastRoute(isLocationPublic(lastLocation)[1])
		handleSignInWithSocials[id]().catch(err => {
			storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_13)
		})
	}
}

const buttonsCommonAuth = {
	[AUTH_GOOGLE]: '',
	[AUTH_FACEBOOK]: '',
	[AUTH_TWITCH]: '',
}

const buttonsCommonChatAndCheckout = { [CHAT]: '', [CHECKOUT]: '' }

export {
	buttonCommonAuthOnClick,
	getButtonsCommon,
	buttonsCommonAuth,
	buttonsCommonChatAndCheckout,
}
