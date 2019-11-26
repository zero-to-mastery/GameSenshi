import React from 'react'
import {
	ButtonSound,
	BUTTON_SOUND_STATE_UUID,
	BUTTON_SOUND_SET_UUID,
} from './ButtonSound'
import classnames from 'classnames'
import {
	StateContainer,
	storeSound,
	storeSoundSetUuid,
	STORE_SOUND_STATE_UUID,
} from 'state'

const mapStoreButtonSoundStateToProp = {
	[BUTTON_SOUND_STATE_UUID]: STORE_SOUND_STATE_UUID,
}

const mapStoreButtonSoundMethodToProp = {
	[BUTTON_SOUND_SET_UUID]: storeSoundSetUuid,
}

const ButtonSoundStoreSound = StateContainer(
	ButtonSound,
	[storeSound],
	[mapStoreButtonSoundStateToProp],
	[mapStoreButtonSoundMethodToProp]
)

const ButtonSoundStoreSoundPropedGender = props => {
	const { gender, ...otherProps } = props
	return (
		<ButtonSoundStoreSound
			color={classnames({
				primary: gender,
				success: !gender,
			})}
			{...otherProps}
		/>
	)
}

const ButtonSoundStoreSoundPropedCardUser = props => {
	return <ButtonSoundStoreSoundPropedGender mobile {...props} />
}

export {
	ButtonSoundStoreSoundPropedGender,
	ButtonSoundStoreSoundPropedCardUser,
}
