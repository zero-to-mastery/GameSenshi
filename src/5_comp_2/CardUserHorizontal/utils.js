import {
	docSellerProfileAvatarSet,
	docSellerProfileCarouselSet,
	docSellerProfileDisplayNameSet,
	docSellerProfileGenderSet,
} from '2_fire_store'

import {
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE,
} from '0_constants'

const seedData = () => {
	docSellerProfileAvatarSet(
		'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiAvatar%2Fmike.jpg?alt=media&token=3801d968-206d-41ae-8a72-158a7baa2cac'
	)
	docSellerProfileCarouselSet([
		{
			[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]:
				'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiCarousel%2Fdenys.jpg?alt=media&token=e5a9c550-8de4-4ea8-aeb4-18d9e8888d00',
		},
		{ [FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'bdgTa9ni4S8' },
		{
			[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]:
				'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiCarousel%2Ffabien-bazanegue.jpg?alt=media&token=156d5a8a-75c5-4955-8e17-ce4ea0fe4ced',
		},
		{
			[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]:
				'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiCarousel%2Fmark-finn.jpg?alt=media&token=79c222b9-0e91-4d10-bf29-85ffe4cabbbf',
		},
		{
			[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]:
				'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiCarousel%2Fmark-finn.jpg?alt=media&token=79c222b9-0e91-4d10-bf29-85ffe4cabbbf',
		},
		{ [FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'vtjorh21b8Q' },
	])

	docSellerProfileDisplayNameSet('Mike Scheinder')

	docSellerProfileGenderSet(FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE)
}

export { seedData }
