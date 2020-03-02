import { createDocGetSet } from './utils'
import { getServerTimestamp } from '1_fire_init'

import {
	fireStorePathSellerSettingProfile,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
	FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES,
} from '0_constants'

const [, docSellerProfileSet, docSellerProfileOnSnapshot] = createDocGetSet(
	fireStorePathSellerSettingProfile
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

const docSellerProfileDisplayNameSet = displayName =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME]: displayName,
	})

const docSellerProfileGenderSet = gender =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER]: gender,
	})

const docSellerProfileServicesSet = services =>
	docSellerProfileSet()({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES]: services,
	})

export {
	docSellerProfileOnSnapshot,
	docSellerProfileAvatarSet,
	docSellerProfileCarouselSet,
	docSellerProfileChannelSet,
	docSellerProfileOnlineSet,
	docSellerProfileDisplayNameSet,
	docSellerProfileGenderSet,
	docSellerProfileServicesSet,
}
