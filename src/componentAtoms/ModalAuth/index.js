import {
	ModalAuth,
	MODAL_AUTH_STATE_BODY,
	MODAL_AUTH_STATE_TITLE,
	MODAL_AUTH_STATE_LOADER,
	MODAL_AUTH_STATE_OPEN,
	MODAL_AUTH_TOGGLE,
	MODAL_AUTH_ON_CONTINUE,
} from 'componentAtoms/ModalAuth/ModalAuth'

import {
	StateContainer,
	storeAuthModal,
	storeAuthModalToggle,
	storeAuthModalOnContinue,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_OPEN,
} from 'state'

const mapStoreAuthModalStateToProp = {
	[MODAL_AUTH_STATE_BODY]: STORE_AUTH_MODAL_STATE_BODY,
	[MODAL_AUTH_STATE_TITLE]: STORE_AUTH_MODAL_STATE_TITLE,
	[MODAL_AUTH_STATE_OPEN]: STORE_AUTH_MODAL_STATE_OPEN,
	[MODAL_AUTH_STATE_LOADER]: STORE_AUTH_MODAL_STATE_LOADER,
}

const mapStoreAuthModalMethodToProp = {
	[MODAL_AUTH_TOGGLE]: storeAuthModalToggle,
	[MODAL_AUTH_ON_CONTINUE]: storeAuthModalOnContinue,
}

const ModalAuthStoreAuthModal = StateContainer(
	ModalAuth,
	[storeAuthModal],
	[mapStoreAuthModalStateToProp],
	[mapStoreAuthModalMethodToProp]
)

export { ModalAuth, ModalAuthStoreAuthModal }
