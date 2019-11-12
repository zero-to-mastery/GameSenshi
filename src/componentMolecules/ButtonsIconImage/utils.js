import {
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
} from './ButtonsIconImage'

import { checkDuplicatedObject } from 'utils'

import {
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
} from 'constantValues'

const options = [
	{
		[BUTTONS_ICON_IMAGE_ID]: FB_FS_GAMES_DOTA2,
		[BUTTONS_ICON_IMAGE_TEXT]: 'Dota 2',
	},
	{
		[BUTTONS_ICON_IMAGE_ID]: FB_FS_GAMES_PUBG,
		[BUTTONS_ICON_IMAGE_TEXT]: 'PUBG',
	},
	{
		[BUTTONS_ICON_IMAGE_ID]: FB_FS_GAMES_LOL,
		[BUTTONS_ICON_IMAGE_TEXT]: 'LOL',
	},
	{
		[BUTTONS_ICON_IMAGE_ID]: FB_FS_GAMES_APEX,
		[BUTTONS_ICON_IMAGE_TEXT]: 'Apex Legends',
	},
	{
		[BUTTONS_ICON_IMAGE_ID]: FB_FS_GAMES_FORTNITE,
		[BUTTONS_ICON_IMAGE_TEXT]: 'Fortnite',
	},
]

const buttonsIndex = [
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
]

const getButtonsIconImage = buttons => {
	const buttons_ = Array.isArray(buttons) ? buttons : [buttons]
	const getButtons = buttons_.map(button =>
		checkDuplicatedObject(options, BUTTONS_ICON_IMAGE_ID).find(
			option => option[BUTTONS_ICON_IMAGE_ID] === button
		)
	)
	return getButtons
}

export { buttonsIndex, getButtonsIconImage }
