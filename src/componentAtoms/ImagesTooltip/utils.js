import {
	ICONS_COMMON_ID,
	ICON_COMMON_PATH,
	ICONS_COMMON_TOOLTIP,
} from './ImagesTooltip'

import {
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
} from 'constantValues'
import { createGetOptions } from 'utils'

const gameIconsPath = game => require(`assets/icons/games/${game}.ico`)

const options = [
	{
		[ICONS_COMMON_ID]: FB_FS_GAMES_DOTA2,
		[ICON_COMMON_PATH]: gameIconsPath('Dota2'),
		[ICONS_COMMON_TOOLTIP]: 'Dota 2',
	},
	{
		[ICONS_COMMON_ID]: FB_FS_GAMES_PUBG,
		[ICON_COMMON_PATH]: gameIconsPath('PUBG'),
		[ICONS_COMMON_TOOLTIP]: 'PUBG',
	},
	{
		[ICONS_COMMON_ID]: FB_FS_GAMES_LOL,
		[ICON_COMMON_PATH]: gameIconsPath('LOL'),
		[ICONS_COMMON_TOOLTIP]: 'LOL',
	},
	{
		[ICONS_COMMON_ID]: FB_FS_GAMES_APEX,
		[ICON_COMMON_PATH]: gameIconsPath('Apex'),
		[ICONS_COMMON_TOOLTIP]: 'Apex Legends',
	},
	{
		[ICONS_COMMON_ID]: FB_FS_GAMES_FORTNITE,
		[ICON_COMMON_PATH]: gameIconsPath('Fortnite'),
		[ICONS_COMMON_TOOLTIP]: 'Fortnite',
	},
]

const getImagesTooltip = createGetOptions(options, ICONS_COMMON_ID)

export { getImagesTooltip }
