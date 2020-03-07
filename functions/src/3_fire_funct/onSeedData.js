import {
	docSellerProfileAvatarSet,
	docSellerProfileCarouselSet,
	docSellerProfileDisplayNameSet,
	docSellerProfileGenderSet,
	docSellerProfileServicesSet,
	docSellerProfileChannelSet,
	docSellerReviewsBatch,
} from '2_fire_store'
import { onCall } from '1_fire_init'
import {
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DOTA2,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PUBG,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_LOL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_APEX,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_FACEBOOK,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_TWITCH,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_YOUTUBE,
	FIRESTORE_SELLER_REVIEWS_COMMENT,
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
	FIRESTORE_SELLER_REVIEWS_BUYER,
	FIRESTORE_SELLER_REVIEWS_BUYER_AVATAR,
	FIRESTORE_SELLER_REVIEWS_BUYER_ID,
} from '0_constants'

import randomItem from 'random-item'
import cryptoRandomString from 'crypto-random-string'

const uid = '2QvJMnyN73SnBXaLuRR0REQpY8X2'

const comments = [
	'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
	'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
	'Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.',
	'Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook publicly for using their brand name...',
	'The supreme art of war is to subdue the enemy without fighting.',
]
const stars = [1, 2, 3, 4, 5]
const buyer = ['buyer1', 'buyer2', 'buyer3', 'buyer4', 'buyer5']
const buyerAvatars = [
	'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/avatar%2Fchristian.jpg?alt=media',
	'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/avatar%2Fjames.jpg?alt=media',
	'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/avatar%2Fjohana.jpg?alt=media',
	'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/avatar%2Fkareya-saleh.jpg?alt=media',
	'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/avatar%2Fmichael.jpg?alt=media',
]

const reviews = [...Array(20)].map(() => ({
	[FIRESTORE_SELLER_REVIEWS_COMMENT]: randomItem(comments),
	[FIRESTORE_SELLER_REVIEWS_STAR]: randomItem(stars),
	[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: cryptoRandomString({ length: 10 }),
	[FIRESTORE_SELLER_REVIEWS_BUYER]: randomItem(buyer),
	[FIRESTORE_SELLER_REVIEWS_BUYER_AVATAR]: randomItem(buyerAvatars),
	[FIRESTORE_SELLER_REVIEWS_BUYER_ID]: cryptoRandomString({ length: 10 }),
}))

const onSeedData = onCall((data, context) => {
	try {
		if (context.auth.uid === 'twitch_238533965') {
			docSellerProfileAvatarSet(uid)(
				'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiAvatar%2Fmike.jpg?alt=media&token=3801d968-206d-41ae-8a72-158a7baa2cac'
			)
			docSellerProfileCarouselSet(uid)([
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
					[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'dRwoKN_Kvqs',
				},
				{
					[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]:
						'https://firebasestorage.googleapis.com/v0/b/gamessenshi.appspot.com/o/senshiCarousel%2Fmark-finn.jpg?alt=media&token=79c222b9-0e91-4d10-bf29-85ffe4cabbbf',
				},
				{ [FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'vtjorh21b8Q' },
			])

			docSellerProfileChannelSet(uid)({
				[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_FACEBOOK]: 'CollegeHumor',
				[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_TWITCH]: 'drdisrespect',
				[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_YOUTUBE]: 'singsing',
			})

			docSellerProfileDisplayNameSet(uid)('Mike Scheinder')

			docSellerProfileGenderSet(uid)(
				FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE
			)

			docSellerProfileServicesSet(uid)([
				{
					[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DOTA2]: {
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS]: 100,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE]: 10,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR]: `===intro1===
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				`,
					},
				},
				{
					[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PUBG]: {
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS]: 150,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE]: 15,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR]: `===intro2===
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				`,
					},
				},
				{
					[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_LOL]: {
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS]: 200,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE]: 20,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR]: `===intro3===
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				`,
					},
				},
				{
					[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_APEX]: {
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS]: 250,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE]: 25,
						[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR]: `===intro4===
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				`,
					},
				},
			]) // we dont use object here but array instead is used here because firestore automatically sort object key
			// it is possible to exempt from sorting however it is better to deal with it in code so less configuration needed on firebase console
			// which is more convenient if you want to create more project using this template especially if you have a loy of field to exempt
			const {
				add: docSellerReviewsBatchAdd,
				commit: docSellerReviewsBatchCommit,
			} = docSellerReviewsBatch(uid)
			reviews.forEach(review => {
				docSellerReviewsBatchAdd(review)
			})
			docSellerReviewsBatchCommit()
		}
	} catch (err) {
		console.log(err)
	}
})

export { onSeedData }
