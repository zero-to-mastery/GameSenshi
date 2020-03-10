import {
	StoreModal,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_IS_OPEN,
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
	PROCESS_REDIRECT_RESULT,
	ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
	STATE,
	CLEAR,
	SIMPLE_ERROR,
	GET_REDIRECT_URL,
} from './StoreModal'

const storeModal = new StoreModal()
const storeModalShow = storeModal[SHOW]
const storeModalClose = storeModal[CLOSE]
const storeModalToggle = storeModal[TOGGLE]
const storeModalGetItem = storeModal[GET_ITEM]
const storeModalSetItem = storeModal[SET_ITEM]
const storeModalInitialize = storeModal[INITIALIZE]
const storeModalRemoveItem = storeModal[REMOVE_ITEM]
const storeModalProcessLinking = storeModal[PROCESS_REDIRECT_RESULT]
const storeModalOnContinue = storeModal[ON_CONTINUE]
const storeModalSetState = storeModal[SET_STATE]
const storeModalResetState = storeModal[RESET_STATE]
const storeModalClear = storeModal[CLEAR]
const storeModalSimpleError = storeModal[SIMPLE_ERROR]
const storeModalGetRedirectUrl = storeModal[GET_REDIRECT_URL]
const storeModalGet = state => storeModal[STATE][state]

export {
	storeModal,
	storeModalShow,
	storeModalClose,
	storeModalToggle,
	storeModalGetItem,
	storeModalSetItem,
	storeModalInitialize,
	storeModalRemoveItem,
	storeModalProcessLinking,
	storeModalOnContinue,
	storeModalSetState,
	storeModalResetState,
	storeModalClear,
	storeModalSimpleError,
	storeModalGetRedirectUrl,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_IS_OPEN,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
	storeModalGet,
}
