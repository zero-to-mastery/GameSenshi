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
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
} from 'state'

const storeAuthModalStateToPropsMap = {
	[MODAL_AUTH_STATE_BODY]: AUTH_MODAL_STORE_STATE_BODY,
	[MODAL_AUTH_STATE_TITLE]: AUTH_MODAL_STORE_STATE_TITLE,
	[MODAL_AUTH_STATE_IS_OPEN]: AUTH_MODAL_STORE_STATE_IS_OPEN,
	[MODAL_AUTH_STATE_LOADER]: AUTH_MODAL_STORE_STATE_LOADER,
}

const storeAuthModalMethodToPropsMap = {
	[MODAL_AUTH_TOGGLE]: storeAuthModalToggle,
	[MODAL_AUTH_ON_CONTINUE]: storeAuthModalOnContinue,
}

const ModalAuthStoreAuthModal = StateContainer(
	ModalAuth,
	[storeAuthModal],
	[storeAuthModalStateToPropsMap],
	[storeAuthModalMethodToPropsMap]
)

export { ModalAuth, ModalAuthStoreAuthModal }
