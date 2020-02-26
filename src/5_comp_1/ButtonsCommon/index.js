import React, { useMemo } from 'react'
import { ButtonsCommon } from './ButtonsCommon'
import {
	buttonCommonSocialOnClick,
	buttonsCommonSocial,
	getButtonsCommon,
	buttonCommonChat,
	buttonsCommonCheckout,
} from './utils'
import { withLastLocation } from '2_routes'

const ButtonsCommonOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtonsCommon(buttons), [buttons])
	return <ButtonsCommon buttons={buttons_} {...otherProps} />
}

const ButtonsCommonPropedSocial = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonCommonSocialOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonsCommonOptioned
			onClick={onClick}
			buttons={buttonsCommonSocial}
			{...restProps}
		/>
	)
})

const ButtonCommonChat = props => {
	return (
		<ButtonsCommonOptioned
			buttons={buttonCommonChat}
			className='btn'
			baseClass='w-100'
			col
			{...props}
		/>
	)
}
const ButtonsCommonCheckout = props => {
	return (
		<ButtonsCommonOptioned
			buttons={buttonsCommonCheckout}
			className='btn'
			baseClass='w-100'
			col
			{...props}
		/>
	)
}

export {
	ButtonsCommonPropedSocial,
	ButtonsCommonOptioned,
	ButtonCommonChat,
	ButtonsCommonCheckout,
}
