import {
	StoreSignIn,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
	SHOW,
	CLOSE,
	TOGGLE,
	ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
} from './StoreSignIn'

const storeSignIn = new StoreSignIn()
const storeSignInShow = storeSignIn[SHOW]
const storeSignInClose = storeSignIn[CLOSE]
const storeSignInToggle = storeSignIn[TOGGLE]
const storeSignInSetState = storeSignIn[SET_STATE]
const storeSignInResetState = storeSignIn[RESET_STATE]
const storeSignInOnSuccessfulSubmission = storeSignIn[ON_SUCCESSFUL_SUBMISSION]

export {
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
}
