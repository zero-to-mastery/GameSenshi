import React, { useMemo } from 'react'
import {
	ButtonsIconImage,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
} from './ButtonsIconImage'
import { buttonsIndex, getButtonsIconImage } from './utils'

import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsImageOptioned } = stopUndefined(Exports)

const ButtonsIconImageOptioned = props => {
	const { buttons, otherProps } = props
	const buttons_ = useMemo(() => getButtonsIconImage(buttons), [buttons])
	return (
		<ButtonsIconImage
			buttons={buttons_}
			iconAs={IconsImageOptioned}
			to='/index'
			{...otherProps}
		/>
	)
}

const ButtonsIconImagePropedIndex = props => {
	return <ButtonsIconImageOptioned buttons={buttonsIndex} {...props} />
}

export {
	ButtonsIconImagePropedIndex,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
}
