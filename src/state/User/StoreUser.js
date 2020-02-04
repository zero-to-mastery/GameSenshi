import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'
import {
	FUNCTION_EMAIL,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
} from '0_constantValues'
import { defaultAvatar } from 'utils'

const STORE_USER = 'User'
const STORE_USER_STATE_AUTH = 'auth'
const STORE_USER_STATE_BIRTH_DATE = 'birthDate'
const STORE_USER_STATE_LANGUAGES = 'languages'
const STORE_USER_STATE_SIGNED_IN = 'signedIn'
const STORE_USER_STATE_GENDER = 'gender'
// * we don't use displayName and photoUrl from firebase user object because this get overwrite when user sign in with social auth
const STORE_USER_STATE_AVATAR = FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR
const STORE_USER_STATE_DISPLAY_NAME = FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME
// * below constant name follow firebase user object properties name for consistency https://firebase.google.com/docs/reference/js/firebase.User
const STORE_USER_STATE_UID = 'uid'
const STORE_USER_STATE_EMAIL = FUNCTION_EMAIL
const STORE_USER_STATE_COUNTRY = 'country'
const STORE_USER_STATE_PHONE_NUMBER = 'phoneNumber'
const STORE_USER_STATE_PROVIDER_DATA = 'providerData'
const STORE_USER_STATE_EMAIL_VERIFIED = 'emailVerified'
const STORE_USER_STATE_SIGNING_IN = 'signingIn'
const SET_SIGNING_IN = 'setIsSigningIn'
const GET_SIGNED_IN = 'getSignedIn'
const INITIALIZE = 'initialize'
const RESET_AVATAR = 'resetAvatar'
const ON_SIGN_IN = 'onSignIn'
const TIMEOUT_ID = 'timeOutID'

const defaultValues = () => ({
	[STORE_USER_STATE_SIGNING_IN]: false,
	[STORE_USER_STATE_UID]: '',
	[STORE_USER_STATE_EMAIL]: '',
	[STORE_USER_STATE_GENDER]: '',
	[STORE_USER_STATE_COUNTRY]: '',
	[STORE_USER_STATE_LANGUAGES]: ['English'],
	[STORE_USER_STATE_AVATAR]: defaultAvatar,
	[STORE_USER_STATE_SIGNED_IN]: false,
	[STORE_USER_STATE_BIRTH_DATE]: new Date(2000, 0, 1),
	[STORE_USER_STATE_DISPLAY_NAME]: '',
	[STORE_USER_STATE_PHONE_NUMBER]: '',
	[STORE_USER_STATE_PROVIDER_DATA]: [],
	[STORE_USER_STATE_EMAIL_VERIFIED]: false,
})

class StoreUser extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
		this[TIMEOUT_ID] = -1
	}

	[RESET_STATE] = () => {
		localStorage.removeItem(STORE_USER)
		this[SET_STATE]({
			...defaultValues(),
			[STORE_USER_STATE_SIGNING_IN]: this[STATE][STORE_USER_STATE_SIGNING_IN], // prevent signing in state from reset because this is needed during redirect
		})
		return this
	};

	[INITIALIZE] = (onAutoSignedInFailed = () => {}) => {
		const user = JSON.parse(localStorage.getItem(STORE_USER))
		// purposely set state syncly so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		if (user) {
			this.state = {
				...this.state,
				...user,
				[STORE_USER_STATE_SIGNING_IN]: true,
			}
			this[SET_SIGNING_IN](true, () => {}, onAutoSignedInFailed)
		}
		return this
	};

	[RESET_AVATAR] = () => {
		this[SET_STATE]({ [STORE_USER_STATE_AVATAR]: defaultAvatar })
		return this
	};

	[GET_SIGNED_IN] = () => {
		return this[STATE][STORE_USER_STATE_SIGNED_IN]
	};

	[SET_SIGNING_IN] = (
		value = false,
		callback = () => {},
		onAutoSignedInFailed = () => {}
	) => {
		this[SET_STATE]({ [STORE_USER_STATE_SIGNING_IN]: value }, callback)
		clearTimeout(this[TIMEOUT_ID])
		if (value) {
			this[TIMEOUT_ID] = setTimeout(() => {
				if (this[STATE][STORE_USER_STATE_SIGNING_IN]) {
					onAutoSignedInFailed()
					this[SET_STATE]({ [STORE_USER_STATE_SIGNING_IN]: false })
				}
			}, 15000)
		}
		return this
	};

	[ON_SIGN_IN] = (userAuth, userData, callback = () => {}) => {
		// * need set signing in because subscribe cause a little lag
		this[SET_SIGNING_IN](true, () => {
			const userData_ = userData || {
				[STORE_USER_STATE_DISPLAY_NAME]: '',
				[STORE_USER_STATE_AVATAR]: defaultAvatar,
			}
			userData_[STORE_USER_STATE_AVATAR] =
				userData_[STORE_USER_STATE_AVATAR] || defaultAvatar
			const publicInfo = {
				[STORE_USER_STATE_DISPLAY_NAME]:
					userData_[STORE_USER_STATE_DISPLAY_NAME],
				[STORE_USER_STATE_EMAIL_VERIFIED]:
					userAuth[STORE_USER_STATE_EMAIL_VERIFIED],
				[STORE_USER_STATE_AVATAR]: userData_[STORE_USER_STATE_AVATAR],
				[STORE_USER_STATE_UID]: userAuth[STORE_USER_STATE_UID],
			}
			this[SET_STATE](state => {
				return {
					...state,
					...userData_,
					[STORE_USER_STATE_AUTH]: userAuth,
					[STORE_USER_STATE_SIGNED_IN]: true,
					[STORE_USER_STATE_SIGNING_IN]: false,
				}
			}, callback)

			// do not store sensitive information in localStorage
			localStorage.setItem(
				STORE_USER,
				JSON.stringify({
					...publicInfo,
				})
			)
		})

		return this
	}
}

export {
	StoreUser,
	STORE_USER_STATE_BIRTH_DATE,
	STORE_USER_STATE_LANGUAGES,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_GENDER,
	STORE_USER_STATE_AVATAR,
	STORE_USER_STATE_DISPLAY_NAME,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_EMAIL,
	STORE_USER_STATE_COUNTRY,
	STORE_USER_STATE_PHONE_NUMBER,
	STORE_USER_STATE_PROVIDER_DATA,
	STORE_USER_STATE_EMAIL_VERIFIED,
	STORE_USER_STATE_SIGNING_IN,
	SET_STATE,
	RESET_STATE,
	SET_SIGNING_IN,
	INITIALIZE,
	RESET_AVATAR,
	ON_SIGN_IN,
	GET_SIGNED_IN,
}
