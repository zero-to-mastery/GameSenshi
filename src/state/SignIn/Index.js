import {
	SignInStore,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_CALLBACK,
	SIGN_IN_STORE_SHOW,
	SIGN_IN_STORE_CLOSE,
	SIGN_IN_STORE_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/SignIn/SignInStore'

const signInStore = new SignInStore()
const signInStoreShow = signInStore[SIGN_IN_STORE_SHOW]
const signInStoreClose = signInStore[SIGN_IN_STORE_CLOSE]
const signInStoreToggle = signInStore[SIGN_IN_STORE_TOGGLE]
const signInStoreSetState = signInStore[SET_STATE]
const signInStoreResetState = signInStore[RESET_STATE]

export {
	signInStore,
	signInStoreShow,
	signInStoreClose,
	signInStoreToggle,
	signInStoreSetState,
	signInStoreResetState,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_CALLBACK,
}
