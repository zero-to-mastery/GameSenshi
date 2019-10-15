import React from 'react'
import { ButtonsSocial, ID, COLOR, ICON, TOOLTIP } from './ButtonsSocial'

const buttons = [
	{
		[ID]: 'facebook',
		[ICON]: 'fab fa-facebook',
		[COLOR]: '#3b5998',
		[TOOLTIP]: 'Connect via Facebook',
	},
	{
		[ID]: 'twitch',
		[ICON]: 'fab fa-twitch',
		[COLOR]: '#6441a5',
		[TOOLTIP]: 'Connect via Twitch',
	},
	{
		[ID]: 'youtube',
		[ICON]: 'fab fa-youtube',
		[COLOR]: '#c4302b',
		[TOOLTIP]: 'Connect via Youtube',
	},
]

const ButtonsSocialPropedDefault = props => {
	return <ButtonsSocial buttons={buttons} />
}

export { ButtonsSocial, ButtonsSocialPropedDefault }
