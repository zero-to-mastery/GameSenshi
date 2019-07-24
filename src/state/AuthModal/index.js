import {
	AuthModalStore,
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
} from 'state/AuthModal/AuthModalStore'

const authModalStore = new AuthModalStore()
const authModalStoreShow = authModalStore[AUTH_MODAL_STORE_SHOW]
const authModalStoreClose = authModalStore[AUTH_MODAL_STORE_CLOSE]
const authModalStoreToggle = authModalStore[AUTH_MODAL_STORE_TOGGLE]
const authModalStoreGetItem = authModalStore[AUTH_MODAL_STORE_GET_ITEM]
const authModalStoreSetItem = authModalStore[AUTH_MODAL_STORE_SET_ITEM]
const authModalStoreInitialize = authModalStore[AUTH_MODAL_STORE_INITIALIZE]
const authModalStoreRemoveItem = authModalStore[AUTH_MODAL_STORE_REMOVE_ITEM]
const authModalStoreOnAuthStateChange =
	authModalStore[AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE]
const authModalStoreProcessRedirectResult =
	authModalStore[AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT]
const authModalStoreOnContinue = authModalStore[AUTH_MODAL_STORE_ON_CONTINUE]
const authModalStoreSetState = authModalStore[SET_STATE]
const authModalStoreResetState = authModalStore[RESET_STATE]

export {
	authModalStore,
	authModalStoreShow,
	authModalStoreClose,
	authModalStoreToggle,
	authModalStoreGetItem,
	authModalStoreSetItem,
	authModalStoreInitialize,
	authModalStoreRemoveItem,
	authModalStoreOnAuthStateChange,
	authModalStoreProcessRedirectResult,
	authModalStoreOnContinue,
	authModalStoreSetState,
	authModalStoreResetState,
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK,
}
