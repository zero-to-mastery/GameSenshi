import {
	StoreAuthModal,
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK,
	AUTH_MODAL_STORE_SHOW,
	AUTH_MODAL_STORE_CLOSE,
	AUTH_MODAL_STORE_TOGGLE,
	AUTH_MODAL_STORE_GET_ITEM,
	AUTH_MODAL_STORE_SET_ITEM,
	AUTH_MODAL_STORE_INITIALIZE,
	AUTH_MODAL_STORE_REMOVE_ITEM,
	AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE,
	AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT,
	AUTH_MODAL_STORE_ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
} from 'state/AuthModal/StoreAuthModal'

const storeAuthModal = new StoreAuthModal()
const storeAuthModalShow = storeAuthModal[AUTH_MODAL_STORE_SHOW]
const storeAuthModalClose = storeAuthModal[AUTH_MODAL_STORE_CLOSE]
const storeAuthModalToggle = storeAuthModal[AUTH_MODAL_STORE_TOGGLE]
const storeAuthModalGetItem = storeAuthModal[AUTH_MODAL_STORE_GET_ITEM]
const storeAuthModalSetItem = storeAuthModal[AUTH_MODAL_STORE_SET_ITEM]
const storeAuthModalInitialize = storeAuthModal[AUTH_MODAL_STORE_INITIALIZE]
const storeAuthModalRemoveItem = storeAuthModal[AUTH_MODAL_STORE_REMOVE_ITEM]
const storeAuthModalOnAuthStateChange =
	storeAuthModal[AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE]
const storeAuthModalProcessRedirectResult =
	storeAuthModal[AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT]
const storeAuthModalOnContinue = storeAuthModal[AUTH_MODAL_STORE_ON_CONTINUE]
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
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK,
}
