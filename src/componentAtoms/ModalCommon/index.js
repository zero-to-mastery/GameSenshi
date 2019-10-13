import React from 'react'

import {
	ModalCommon,
	MODAL_COMMON_STATE_BODY,
	MODAL_COMMON_STATE_TITLE,
	MODAL_COMMON_STATE_LOADER,
	MODAL_COMMON_STATE_IS_OPEN,
	MODAL_COMMON_TOGGLE,
	MODAL_COMMON_ON_CONTINUE,
} from './ModalCommon'

import {
	StateContainer,
	storeModal,
	storeModalToggle,
	storeModalOnContinue,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_IS_OPEN,
} from 'state'

const mapStoreModalStateToProp = {
	[MODAL_COMMON_STATE_BODY]: STORE_MODAL_STATE_BODY,
	[MODAL_COMMON_STATE_TITLE]: STORE_MODAL_STATE_TITLE,
	[MODAL_COMMON_STATE_IS_OPEN]: STORE_MODAL_STATE_IS_OPEN,
	[MODAL_COMMON_STATE_LOADER]: STORE_MODAL_STATE_LOADER,
}

const mapStoreModalMethodToProp = {
	[MODAL_COMMON_TOGGLE]: storeModalToggle,
	[MODAL_COMMON_ON_CONTINUE]: storeModalOnContinue,
}

const ModalCommonStoreModal = StateContainer(
	ModalCommon,
	[storeModal],
	[mapStoreModalStateToProp],
	[mapStoreModalMethodToProp]
)

const ModalCommonStoreModalPropedAuth = props => {
	return <ModalCommonStoreModal footer='continue' {...props} />
}

const ModalCommonStoreModalPropedImageCropper = props => {
	return (
		<ModalCommonStoreModalPropedImageCropper
			title='Set New Profile Picture'
			footer='Crop and Update Profile Image'
			{...props}
		/>
	)
}

export {
	ModalCommonStoreModalPropedImageCropper,
	ModalCommonStoreModalPropedAuth,
}
