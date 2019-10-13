import {
	StoreModal,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_OPEN,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
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
} from './StoreModal'

const storeModal = new StoreModal()
const storeModalShow = storeModal[SHOW]
const storeModalClose = storeModal[CLOSE]
const storeModalToggle = storeModal[TOGGLE]
const storeModalGetItem = storeModal[GET_ITEM]
const storeModalSetItem = storeModal[SET_ITEM]
const storeModalInitialize = storeModal[INITIALIZE]
const storeModalRemoveItem = storeModal[REMOVE_ITEM]
const storeModalOnAuthStateChange = storeModal[ON_AUTH_STATE_CHANGE]
const storeModalProcessRedirectResult = storeModal[PROCESS_REDIRECT_RESULT]
const storeModalOnContinue = storeModal[ON_CONTINUE]
const storeModalSetState = storeModal[SET_STATE]
const storeModalResetState = storeModal[RESET_STATE]

export {
	storeModal,
	storeModalShow,
	storeModalClose,
	storeModalToggle,
	storeModalGetItem,
	storeModalSetItem,
	storeModalInitialize,
	storeModalRemoveItem,
	storeModalOnAuthStateChange,
	storeModalProcessRedirectResult,
	storeModalOnContinue,
	storeModalSetState,
	storeModalResetState,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_OPEN,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
}
