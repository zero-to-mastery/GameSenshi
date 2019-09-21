import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

import defaultAvatar from 'assets/img/placeholder.jpg'

const STORE_USER = 'User'
const STORE_USER_STATE_AUTH = 'auth'
const STORE_USER_STATE_BIRTH_DATE = 'birthDate'
const STORE_USER_STATE_LANGUAGES = 'languages'
const STORE_USER_STATE_SIGNED_IN = 'signedIn'
const STORE_USER_STATE_GENDER = 'gender'
// * we don't use displayName and photoUrl from firebase user object because this get overwrite when user sign in with social auth
const STORE_USER_STATE_AVATAR_URL = 'avatarURL'
const STORE_USER_STATE_USERNAME = 'username'
// * below constant name follow firebase user object properties name for consistency https://firebase.google.com/docs/reference/js/firebase.User
const STORE_USER_STATE_UID = 'uid'
const STORE_USER_STATE_EMAIL = 'email'
const STORE_USER_STATE_COUNTRY = 'country'
const STORE_USER_STATE_PHONE_NUMBER = 'phoneNumber'
const STORE_USER_STATE_PROVIDER_DATA = 'providerData'
const STORE_USER_STATE_EMAIL_VERIFIED = 'emailVerified'
const STORE_USER_STATE_SIGNING_IN = 'isSigningIn'
const STORE_USER_STATE_SOFT_SIGNED_IN = 'isSoftSignedIn'
const SET_SIGNING_IN = 'setIsSigningIn'
const INITIALIZE = 'initialize'
const RESET_AVATAR = 'resetAvatar'
const ON_AUTH_STATE_CHANGED = 'onAuthStateChanged'

const defaultValues = () => ({
	[STORE_USER_STATE_SIGNING_IN]: false,
	[STORE_USER_STATE_UID]: '',
	[STORE_USER_STATE_EMAIL]: '',
	[STORE_USER_STATE_GENDER]: '',
	[STORE_USER_STATE_COUNTRY]: '',
	[STORE_USER_STATE_LANGUAGES]: ['English'],
	[STORE_USER_STATE_AVATAR_URL]: defaultAvatar,
	[STORE_USER_STATE_SIGNED_IN]: false,
	[STORE_USER_STATE_SOFT_SIGNED_IN]: false,
	[STORE_USER_STATE_BIRTH_DATE]: new Date(2000, 0, 1),
	[STORE_USER_STATE_USERNAME]: '',
	[STORE_USER_STATE_PHONE_NUMBER]: '',
	[STORE_USER_STATE_PROVIDER_DATA]: [],
	[STORE_USER_STATE_EMAIL_VERIFIED]: false,
})

class StoreUser extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[INITIALIZE] = (onAutoSignedInFailed = () => {}) => {
		const user = JSON.parse(localStorage.getItem(STORE_USER))
		// purposely set state in sync so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		if (user) {
			this.state = {
				...this.state,
				...user,
				[STORE_USER_STATE_SOFT_SIGNED_IN]: true,
			}
			this[SET_SIGNING_IN](true, onAutoSignedInFailed)
		}
		return this
	};

	[SET_SIGNING_IN] = (value = false, onAutoSignedInFailed = () => {}) => {
		this[SET_STATE]({ [STORE_USER_STATE_SIGNING_IN]: value })
		if (value) {
			setTimeout(() => {
				if (this[STATE][STORE_USER_STATE_SIGNING_IN]) {
					onAutoSignedInFailed()
				}
				this[SET_SIGNING_IN](false)
			}, 10000)
		}
		return this
	};

	[RESET_AVATAR] = () => {
		this[SET_STATE]({ [STORE_USER_STATE_AVATAR_URL]: defaultAvatar })
		return this
	};

	[ON_AUTH_STATE_CHANGED] = (userAuth, onSnapshot) => {
		let unsubscribe = () => {}
		if (userAuth) {
			unsubscribe = onSnapshot(doc => {
				const userData = doc.data()
				const publicInfo = {
					[STORE_USER_STATE_USERNAME]: userData[STORE_USER_STATE_USERNAME],
					[STORE_USER_STATE_EMAIL_VERIFIED]:
						userAuth[STORE_USER_STATE_EMAIL_VERIFIED],
					[STORE_USER_STATE_AVATAR_URL]:
						userData[STORE_USER_STATE_AVATAR_URL] || defaultAvatar,
					[STORE_USER_STATE_UID]: userAuth[STORE_USER_STATE_UID],
				}
				this[SET_STATE](
					state => {
						return {
							...state,
							[STORE_USER_STATE_AUTH]: userAuth,
							[STORE_USER_STATE_SIGNED_IN]: true,
						}
					},
					() => {
						this[SET_SIGNING_IN](false)
					}
				)
				// do not store sensitive information in localStorage
				localStorage.setItem(
					STORE_USER,
					JSON.stringify({
						...publicInfo,
					})
				)
			})
		} else {
			// user signed out.
			unsubscribe()
			this[RESET_STATE]()
			this[SET_SIGNING_IN](false)
			try {
				localStorage.removeItem(STORE_USER)
			} catch (e) {
				//console.log(e)
			}
		}
		return this
	}
}

export {
	StoreUser,
	STORE_USER_STATE_BIRTH_DATE,
	STORE_USER_STATE_LANGUAGES,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_GENDER,
	STORE_USER_STATE_AVATAR_URL,
	STORE_USER_STATE_USERNAME,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_EMAIL,
	STORE_USER_STATE_COUNTRY,
	STORE_USER_STATE_PHONE_NUMBER,
	STORE_USER_STATE_PROVIDER_DATA,
	STORE_USER_STATE_EMAIL_VERIFIED,
	STORE_USER_STATE_SIGNING_IN,
	STORE_USER_STATE_SOFT_SIGNED_IN,
	SET_STATE,
	RESET_STATE,
	SET_SIGNING_IN,
	INITIALIZE,
	RESET_AVATAR,
	ON_AUTH_STATE_CHANGED,
}
