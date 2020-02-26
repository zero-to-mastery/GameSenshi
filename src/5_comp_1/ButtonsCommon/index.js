import React, { useMemo } from 'react'
import { ButtonsCommon } from './ButtonsCommon'
import {
	buttonCommonSocialOnClick,
	buttonsCommonSocial,
	getButtonsCommon,
	buttonsCommonChatAndCheckout,
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

const ButtonsCommonChatAndCheckout = props => {
	return (
		<ButtonsCommonOptioned
			buttons={buttonsCommonChatAndCheckout}
			className='w-100'
			baseClass='w-100'
			{...props}
		/>
	)
}

export {
	ButtonsCommonPropedSocial,
	ButtonsCommonOptioned,
	ButtonsCommonChatAndCheckout,
}
