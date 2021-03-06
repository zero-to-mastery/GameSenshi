// TODO this should turn into npm library so that backend can use the same code
// constants is a nodejs module, so the folder is named constantValues instead

import {
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_INPUT,
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FUNCTION_DISPLAY_NAME,
	FUNCTION_OAUTH_CODE,
	FUNCTION_TOKEN_CUSTOM,
	FUNCTION_REDIRECT_URI,
	FUNCTION_ON_DATA_SEED,
	FUNCTION_ON_TWITCH_SIGN_IN,
	FUNCTION_UID,
} from './FunctionConstants'

import {
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
} from './EnvKeyConstants'

import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
	INTERNAL_ERROR_CODE_9,
	INTERNAL_ERROR_CODE_10,
	INTERNAL_ERROR_CODE_11,
	INTERNAL_ERROR_CODE_12,
	INTERNAL_ERROR_CODE_13,
	INTERNAL_ERROR_CODE_14,
	INTERNAL_ERROR_CODE_15,
	INTERNAL_ERROR_CODE_16,
	INTERNAL_ERROR_CODE_17,
} from './InternalErrorConstants'

import {
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_9,
	UNEXPECTED_ERROR_CODE_10,
	UNEXPECTED_ERROR_CODE_11,
	UNEXPECTED_ERROR_CODE_12,
	UNEXPECTED_ERROR_CODE_13,
	UNEXPECTED_ERROR_CODE_14,
	UNEXPECTED_ERROR_CODE_15,
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
	UNEXPECTED_ERROR_CODE_18,
	UNEXPECTED_ERROR_CODE_19,
	UNEXPECTED_ERROR_CODE_20,
	UNEXPECTED_ERROR_CODE_21,
	UNEXPECTED_ERROR_CODE_22,
} from './UnexpectedErrorConstants'

import {
	CREATED_AT,
	UPDATED_AT,
	storagePathUserAvatar,
	STORAGE_USER_AVATAR,
	FIRESTORE_USER,
	FIRESTORE_USER_SETTINGS,
	fireStorePathUserSettingsNotification,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	fireStorePathSeller,
	FIRESTORE_SELLER_TOTAL_REVIEWS,
	FIRESTORE_SELLER_TOTAL_STARS,
	FIRESTORE_SELLER_LATEST_COMMENTS,
	fireStorePathSellerReviews,
	FIRESTORE_SELLER_REVIEWS_COMMENT,
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
	FIRESTORE_SELLER_REVIEWS_BUYER_NAME,
	FIRESTORE_SELLER_REVIEWS_BUYER_ID,
	fireStorePathSellerSettingProfile,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_FACEBOOK,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_TWITCH,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_YOUTUBE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DOTA2,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PUBG,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_LOL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_APEX,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_FORTNITE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	storagePathSellerCarousel,
	storagePathSellerAvatar,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_USER_SELLER_FAVOURITE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_VERIFIED,
	fireStorePathUser_Seller,
} from './FireStorageConstants'

import {
	ENV_VALUE_FIREBASE_CONFIG,
	ENV_VALUE_TWITCH_OAUTH_LINK,
} from './EnvValueConstants'

import { AUTH_GOOGLE, AUTH_FACEBOOK, AUTH_TWITCH } from './AuthConstants'

import {
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
	databasePathStatus,
} from './DatabaseConstants'

export {
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_INPUT,
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FUNCTION_DISPLAY_NAME,
	FUNCTION_OAUTH_CODE,
	FUNCTION_TOKEN_CUSTOM,
	FUNCTION_REDIRECT_URI,
	FUNCTION_ON_TWITCH_SIGN_IN,
	FUNCTION_ON_DATA_SEED,
	FUNCTION_UID,
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
	INTERNAL_ERROR_CODE_9,
	INTERNAL_ERROR_CODE_10,
	INTERNAL_ERROR_CODE_11,
	INTERNAL_ERROR_CODE_12,
	INTERNAL_ERROR_CODE_13,
	INTERNAL_ERROR_CODE_14,
	INTERNAL_ERROR_CODE_15,
	INTERNAL_ERROR_CODE_16,
	INTERNAL_ERROR_CODE_17,
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_9,
	UNEXPECTED_ERROR_CODE_10,
	UNEXPECTED_ERROR_CODE_11,
	UNEXPECTED_ERROR_CODE_12,
	UNEXPECTED_ERROR_CODE_13,
	UNEXPECTED_ERROR_CODE_14,
	UNEXPECTED_ERROR_CODE_15,
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
	UNEXPECTED_ERROR_CODE_18,
	UNEXPECTED_ERROR_CODE_19,
	UNEXPECTED_ERROR_CODE_20,
	UNEXPECTED_ERROR_CODE_21,
	UNEXPECTED_ERROR_CODE_22,
	CREATED_AT,
	UPDATED_AT,
	storagePathUserAvatar,
	STORAGE_USER_AVATAR,
	FIRESTORE_USER,
	FIRESTORE_USER_SETTINGS,
	fireStorePathUserSettingsNotification,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_USER_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	fireStorePathSeller,
	FIRESTORE_SELLER_TOTAL_REVIEWS,
	FIRESTORE_SELLER_TOTAL_STARS,
	FIRESTORE_SELLER_LATEST_COMMENTS,
	fireStorePathSellerReviews,
	FIRESTORE_SELLER_REVIEWS_COMMENT,
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
	FIRESTORE_SELLER_REVIEWS_BUYER_NAME,
	FIRESTORE_SELLER_REVIEWS_BUYER_ID,
	fireStorePathSellerSettingProfile,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_FACEBOOK,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_TWITCH,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS_YOUTUBE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PRICE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DESCR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_ORDERS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_DOTA2,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_PUBG,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_LOL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_APEX,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES_FORTNITE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	storagePathSellerCarousel,
	storagePathSellerAvatar,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER_FEMALE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_USER_SELLER_FAVOURITE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_VERIFIED,
	fireStorePathUser_Seller,
	ENV_VALUE_FIREBASE_CONFIG,
	ENV_VALUE_TWITCH_OAUTH_LINK,
	AUTH_GOOGLE,
	AUTH_FACEBOOK,
	AUTH_TWITCH,
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
	databasePathStatus,
}
