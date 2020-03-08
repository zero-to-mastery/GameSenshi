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

const {
	set: docSellerProfileSet,
	on: docSellerProfileOnSnapshot,
} = docGetSetBatch(fireStorePathSellerSettingProfile)

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
	docSellerProfileDisplayNameSet,
	docSellerProfileGenderSet,
	docSellerProfileServicesSet,
}
