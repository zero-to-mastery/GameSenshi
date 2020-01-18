import { createDocGetSet } from './utils'
import { getServerTimestamp } from 'firebaseInit'

import {
	fireStorePathSenshiSettingProfile,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE_STATE,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE_UPDATED_AT,
} from 'constantValues'

const [, docSenshiProfileSet, docSenshiProfileOnSnapshot] = createDocGetSet(
	fireStorePathSenshiSettingProfile
)

const docSenshiProfileAvatarSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

const docSenshiProfileCarouselSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL]: url,
	})

const docSenshiProfileChannelSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS]: url,
	})

const docdocSenshiProfileOnlineSet = online =>
	docSenshiProfileSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE]: {
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE_STATE]: online,
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_ONLINE_UPDATED_AT]: getServerTimestamp(),
		},
	})

export {
	docSenshiProfileOnSnapshot,
	docSenshiProfileAvatarSet,
	docSenshiProfileCarouselSet,
	docSenshiProfileChannelSet,
	docdocSenshiProfileOnlineSet,
}
