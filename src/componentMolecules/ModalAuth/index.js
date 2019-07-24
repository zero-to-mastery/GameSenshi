import {
	ModalAuth,
	MODAL_AUTH_STATE_BODY,
	MODAL_AUTH_STATE_TITLE,
	MODAL_AUTH_STATE_LOADER,
	MODAL_AUTH_STATE_IS_OPEN,
	MODAL_AUTH_TOGGLE,
	MODAL_AUTH_ON_CONTINUE,
} from 'componentMolecules/ModalAuth'

import {
	StateContainer,
	authModalStore,
	authModalStoreToggle,
	authModalStoreOnContinue,
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
} from 'state'

const authModalStoreStateToPropsMap = {
	[MODAL_AUTH_STATE_BODY]: AUTH_MODAL_STORE_STATE_BODY,
	[MODAL_AUTH_STATE_TITLE]: AUTH_MODAL_STORE_STATE_TITLE,
	[MODAL_AUTH_STATE_IS_OPEN]: AUTH_MODAL_STORE_STATE_IS_OPEN,
	[MODAL_AUTH_STATE_LOADER]: AUTH_MODAL_STORE_STATE_LOADER,
}

const authModalStoreMethodToPropsMap = {
	[MODAL_AUTH_TOGGLE]: authModalStoreToggle,
	[MODAL_AUTH_ON_CONTINUE]: authModalStoreOnContinue,
}

const ModalAuthStoreAuthModal = StateContainer(
	ModalAuth,
	[authModalStore],
	[authModalStoreStateToPropsMap],
	[authModalStoreMethodToPropsMap]
)

export { ModalAuth, ModalAuthStoreAuthModal }
