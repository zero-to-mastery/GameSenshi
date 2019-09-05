import {
	StoreAuthModal,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_OPEN,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
	SHOW,
	CLOSE,
	TOGGLE,
	GET_ITEM,
	SET_ITEM,
	INITIALIZE,
	REMOVE_ITEM,
	ON_AUTH_STATE_CHANGE,
	PROCESS_REDIRECT_RESULT,
	ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
} from 'state/AuthModal/StoreAuthModal'

const storeAuthModal = new StoreAuthModal()
const storeAuthModalShow = storeAuthModal[SHOW]
const storeAuthModalClose = storeAuthModal[CLOSE]
const storeAuthModalToggle = storeAuthModal[TOGGLE]
const storeAuthModalGetItem = storeAuthModal[GET_ITEM]
const storeAuthModalSetItem = storeAuthModal[SET_ITEM]
const storeAuthModalInitialize = storeAuthModal[INITIALIZE]
const storeAuthModalRemoveItem = storeAuthModal[REMOVE_ITEM]
const storeAuthModalOnAuthStateChange = storeAuthModal[ON_AUTH_STATE_CHANGE]
const storeAuthModalProcessRedirectResult =
	storeAuthModal[PROCESS_REDIRECT_RESULT]
const storeAuthModalOnContinue = storeAuthModal[ON_CONTINUE]
const storeAuthModalSetState = storeAuthModal[SET_STATE]
const storeAuthModalResetState = storeAuthModal[RESET_STATE]

export {
	storeAuthModal,
	storeAuthModalShow,
	storeAuthModalClose,
	storeAuthModalToggle,
	storeAuthModalGetItem,
	storeAuthModalSetItem,
	storeAuthModalInitialize,
	storeAuthModalRemoveItem,
	storeAuthModalOnAuthStateChange,
	storeAuthModalProcessRedirectResult,
	storeAuthModalOnContinue,
	storeAuthModalSetState,
	storeAuthModalResetState,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_OPEN,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
}
