import {
	ModalAuth,
	MODAL_AUTH_STATE_BODY,
	MODAL_AUTH_STATE_TITLE,
	MODAL_AUTH_STATE_LOADER,
	MODAL_AUTH_STATE_IS_OPEN,
	MODAL_AUTH_TOGGLE,
	MODAL_AUTH_ON_CONTINUE,
} from 'componentMolecules/ModalAuth/ModalAuth'

import {
	StateContainer,
	storeAuthModal,
	storeAuthModalToggle,
	storeAuthModalOnContinue,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_IS_OPEN,
} from 'state'

const MapStoreAuthModalStateToProp = {
	[MODAL_AUTH_STATE_BODY]: STORE_AUTH_MODAL_STATE_BODY,
	[MODAL_AUTH_STATE_TITLE]: STORE_AUTH_MODAL_STATE_TITLE,
	[MODAL_AUTH_STATE_IS_OPEN]: STORE_AUTH_MODAL_STATE_IS_OPEN,
	[MODAL_AUTH_STATE_LOADER]: STORE_AUTH_MODAL_STATE_LOADER,
}

const MapStoreAuthModalMethodToProp = {
	[MODAL_AUTH_TOGGLE]: storeAuthModalToggle,
	[MODAL_AUTH_ON_CONTINUE]: storeAuthModalOnContinue,
}

const ModalAuthStoreAuthModal = StateContainer(
	ModalAuth,
	[storeAuthModal],
	[MapStoreAuthModalStateToProp],
	[MapStoreAuthModalMethodToProp]
)

export { ModalAuth, ModalAuthStoreAuthModal }
