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
		<ButtonsImageOptioned
			className='justify-content-around'
			buttonFlex={{
				xs: '1.5',
				lg: '1.25',
			}}
			buttons={buttonsIndex}
			{...props}
		/>
	)
}

export {
	ButtonsImagePropedIndex,
	BUTTONS_COMMON_IMAGE_ID,
	BUTTONS_COMMON_IMAGE_TEXT,
}
