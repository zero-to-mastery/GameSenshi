import React, { useMemo } from 'react'
import {
	ButtonsImage,
	BUTTONS_COMMON_IMAGE_ID,
	BUTTONS_COMMON_IMAGE_TEXT,
} from './ButtonsImage'
import { buttonsIndex, getButtonsImage } from './utils'

const ButtonsImageOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtonsImage(buttons), [buttons])
	return <ButtonsImage buttons={buttons_} to='/index' {...otherProps} />
}

const ButtonsImagePropedIndex = props => {
	return (
		<ButtonsImageOptioned className='mt-3' buttons={buttonsIndex} {...props} />
	)
}

export {
	ButtonsImagePropedIndex,
	BUTTONS_COMMON_IMAGE_ID,
	BUTTONS_COMMON_IMAGE_TEXT,
}
