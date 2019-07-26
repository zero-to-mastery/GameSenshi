import {
	StoreAuthModal,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_IS_OPEN,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
	STORE_AUTH_MODAL_SHOW,
	STORE_AUTH_MODAL_CLOSE,
	STORE_AUTH_MODAL_TOGGLE,
	STORE_AUTH_MODAL_GET_ITEM,
	STORE_AUTH_MODAL_SET_ITEM,
	STORE_AUTH_MODAL_INITIALIZE,
	STORE_AUTH_MODAL_REMOVE_ITEM,
	STORE_AUTH_MODAL_ON_AUTH_STATE_CHANGE,
	STORE_AUTH_MODAL_PROCESS_REDIRECT_RESULT,
	STORE_AUTH_MODAL_ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
} from 'state/AuthModal/StoreAuthModal'

const storeAuthModal = new StoreAuthModal()
const storeAuthModalShow = storeAuthModal[STORE_AUTH_MODAL_SHOW]
const storeAuthModalClose = storeAuthModal[STORE_AUTH_MODAL_CLOSE]
const storeAuthModalToggle = storeAuthModal[STORE_AUTH_MODAL_TOGGLE]
const storeAuthModalGetItem = storeAuthModal[STORE_AUTH_MODAL_GET_ITEM]
const storeAuthModalSetItem = storeAuthModal[STORE_AUTH_MODAL_SET_ITEM]
const storeAuthModalInitialize = storeAuthModal[STORE_AUTH_MODAL_INITIALIZE]
const storeAuthModalRemoveItem = storeAuthModal[STORE_AUTH_MODAL_REMOVE_ITEM]
const storeAuthModalOnAuthStateChange =
	storeAuthModal[STORE_AUTH_MODAL_ON_AUTH_STATE_CHANGE]
const storeAuthModalProcessRedirectResult =
	storeAuthModal[STORE_AUTH_MODAL_PROCESS_REDIRECT_RESULT]
const storeAuthModalOnContinue = storeAuthModal[STORE_AUTH_MODAL_ON_CONTINUE]
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
	STORE_AUTH_MODAL_STATE_IS_OPEN,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
}
