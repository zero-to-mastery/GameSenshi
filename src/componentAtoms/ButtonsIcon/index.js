import React, { useMemo } from 'react'
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

export {
	ButtonsIconPropedAuth,
	ButtonsIconOptioned,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
}
