import { createDocGetSet } from './utils'

import {
	fireStorePathSenshiSettingProfile,
	FIRESTORE_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SENSHI_PROFILE_CHANNELS,
	FIRESTORE_SENSHI_PROFILE_CAROUSEL,
} from 'constantValues'

const [
	docSenshiProfileGet,
	docSenshiProfileSet,
	docSenshiProfileOnSnapshot,
] = createDocGetSet(fireStorePathSenshiSettingProfile)

const docSenshiProfileAvatarSet = url =>
	docSenshiProfileSet({
		[FIRESTORE_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

const docSenshiProfileCarouselSet = url =>
	docSenshiProfileSet({
		[FIRESTORE_SENSHI_PROFILE_CAROUSEL]: url,
	})

const docSenshiProfileChannelSet = url =>
	docSenshiProfileSet({
		[FIRESTORE_SENSHI_PROFILE_CHANNELS]: url,
	})

export {
	docSenshiProfileGet,
	docSenshiProfileSet,
	docSenshiProfileOnSnapshot,
	docSenshiProfileAvatarSet,
	docSenshiProfileCarouselSet,
	docSenshiProfileChannelSet,
}
