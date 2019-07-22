import {
	SignInStore,
	SIGN_IN_STATE_OPEN,
	SIGN_IN_STATE_EMAIL,
	SIGN_IN_STATE_CALLBACK,
	SIGN_IN_SHOW,
	SIGN_IN_CLOSE,
	SIGN_IN_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/SignIn/SignInStore'

const signInStore = new SignInStore()
const signInStoreShow = signInStore[SIGN_IN_SHOW]
const signInStoreClose = signInStore[SIGN_IN_CLOSE]
const signInStoreToggle = signInStore[SIGN_IN_TOGGLE]
const signInStoreSetState = signInStore[SET_STATE]
const signInStoreResetState = signInStore[RESET_STATE]

export {
	signInStore,
	signInStoreShow,
	signInStoreClose,
	signInStoreToggle,
	signInStoreSetState,
	signInStoreResetState,
	SIGN_IN_STATE_OPEN,
	SIGN_IN_STATE_EMAIL,
	SIGN_IN_STATE_CALLBACK,
}
