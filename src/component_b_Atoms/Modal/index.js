import React from 'react'

import {
	Modal,
	MODAL_STATE_CHILDREN,
	MODAL_STATE_TITLE,
	MODAL_STATE_LOADER,
	MODAL_STATE_IS_OPEN,
	MODAL_TOGGLE,
	MODAL_ON_CONTINUE,
} from './Modal'

import {
	StateContainer,
	storeModal,
	storeModalToggle,
	storeModalOnContinue,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_IS_OPEN,
} from '2_state'

const mapStoreModalStateToProp = {
	[MODAL_STATE_CHILDREN]: STORE_MODAL_STATE_BODY,
	[MODAL_STATE_TITLE]: STORE_MODAL_STATE_TITLE,
	[MODAL_STATE_IS_OPEN]: STORE_MODAL_STATE_IS_OPEN,
	[MODAL_STATE_LOADER]: STORE_MODAL_STATE_LOADER,
}

const mapStoreModalMethodToProp = {
	[MODAL_TOGGLE]: storeModalToggle,
	[MODAL_ON_CONTINUE]: storeModalOnContinue,
}

const ModalStoreModal = StateContainer(
	Modal,
	[storeModal],
	[mapStoreModalStateToProp],
	[mapStoreModalMethodToProp]
)

const ModalStoreModalPropedAuth = props => {
	return <ModalStoreModal footer='continue' {...props} />
}

export { Modal, ModalStoreModalPropedAuth }
