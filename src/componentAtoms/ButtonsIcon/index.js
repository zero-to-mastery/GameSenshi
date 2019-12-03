import React, { useMemo } from 'react'
import { Button } from 'reactstrap'
import {
	ButtonsIcon,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
} from './ButtonsIcon'
import { buttonIconAuthOnClick, buttonIconAuths, getButtonsIcon } from './utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsIconOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtonsIcon(buttons), [buttons])
	return <ButtonsIcon buttons={buttons_} {...otherProps} />
}

const ButtonsIconPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonIconAuthOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonsIconOptioned
			onClick={onClick}
			buttons={buttonIconAuths}
			{...restProps}
		/>
	)
})

const ButtonIconChat = props => {
	const { ...otherProps } = props
	return (
		<ButtonsIcon
			id={1}
			color='success'
			href='#'
			className='btn btn-simple'
			type='button'
			icon='tim-icons icon-chat-33'
			label='Chat'
			onClick={() => {}}
			{...otherProps}
		/>
	)
}

const ButtonIconAddToCart = props => {
	const { ...otherProps } = props
	return (
		<ButtonsIcon
			id={2}
			color='warning'
			href='#'
			className='btn btn-simple'
			icon='tim-icons icon-cart'
			label='Add to cart'
			onClick={() => {}}
			{...otherProps}
		/>
	)
}

const ButtonGroupProfile = props => {
	return (
		<div className='d-flex flex-column'>
			<ButtonIconChat />
			<ButtonIconAddToCart />
		</div>
	)
}

export {
	ButtonsIconPropedAuth,
	ButtonsIconOptioned,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
	ButtonGroupProfile,
}
