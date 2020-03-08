import { docGetSetBatch } from './utils'

import {
	fireStorePathSellerSettingProfile,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES,
} from '0_constants'

const { set: docSellerProfileSet } = docGetSetBatch(
	fireStorePathSellerSettingProfile
)

const docSellerProfileAvatarSet = uid => url =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR]: url,
	})

const docSellerProfileCarouselSet = uid => url =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL]: url,
	})

const docSellerProfileChannelSet = uid => url =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS]: url,
	})

const docSellerProfileDisplayNameSet = uid => displayName =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME]: displayName,
	})

const docSellerProfileGenderSet = uid => gender =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER]: gender,
	})

const docSellerProfileServicesSet = uid => services =>
	docSellerProfileSet(uid)({
		[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES]: services,
	})

export {
	docSellerProfileAvatarSet,
	docSellerProfileCarouselSet,
	docSellerProfileChannelSet,
	docSellerProfileDisplayNameSet,
	docSellerProfileGenderSet,
	docSellerProfileServicesSet,
	docSellerProfileSet,
}
