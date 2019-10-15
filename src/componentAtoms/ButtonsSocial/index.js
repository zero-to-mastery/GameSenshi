import React from 'react'
import { ButtonsSocial, ID, COLOR, ICON, TOOLTIP } from './ButtonsSocial'

const buttons = [
	{
		[ID]: 'facebook',
		[ICON]: 'fab fa-facebook',
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

const ButtonsSocialPropedDefault = props => {
	const { ...restProps } = props
	return <ButtonsSocial buttons={buttons} {...restProps} />
}

export { ButtonsSocial, ButtonsSocialPropedDefault }
