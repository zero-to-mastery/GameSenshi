import { createDocGetSet } from './utils'
import { getServerTimestamp } from '1_fire_init'

import {
	fireStorePathSenshiSettingProfile,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
} from '0_constants'

const [, docSellerProfileSet, docSellerProfileOnSnapshot] = createDocGetSet(
	fireStorePathSenshiSettingProfile
)

const docSellerProfileAvatarSet = url =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR]: url,
	})

const docSellerProfileCarouselSet = url =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL]: url,
	})

const docSellerProfileChannelSet = url =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS]: url,
	})

const docSellerProfileOnlineSet = online =>
	docSellerProfileSet()({
		[DATABASE_STATUS_ONLINE]: online,
		...(online && { [DATABASE_STATUS_ONLINE_LAST]: getServerTimestamp() }),
	})

export {
	docSellerProfileOnSnapshot,
	docSellerProfileAvatarSet,
	docSellerProfileCarouselSet,
	docSellerProfileChannelSet,
	docSellerProfileOnlineSet,
}
