import React, { useMemo } from 'react'
import {
	ButtonsIconImage,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
} from './ButtonsIconImage'
import { buttonsIndex, getButtonsIconImage } from './utils'

const ButtonsIconImageOptioned = props => {
	const { buttons, otherProps } = props
	const buttons_ = useMemo(() => getButtonsIconImage(buttons), [buttons])
	return <ButtonsIconImage buttons={buttons_} to='/index' {...otherProps} />
}

const ButtonsIconImagePropedIndex = props => {
	return <ButtonsIconImageOptioned buttons={buttonsIndex} {...props} />
}

export {
	ButtonsIconImagePropedIndex,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
}
