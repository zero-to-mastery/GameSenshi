import React, { useMemo } from 'react'
import {
	ButtonsIcon,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
} from './ButtonsIcon'
import { buttonSocialAuthOnClick, buttonSocialAuths, getButtons } from './utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsSocialPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonSocialAuthOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonsIcon onClick={onClick} buttons={buttonSocialAuths} {...restProps} />
	)
})

const ButtonsSocialOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtons(buttons), [buttons])
	return <ButtonsIcon buttons={buttons_} {...otherProps} />
}

export {
	ButtonsSocialPropedAuth,
	ButtonsSocialOptioned,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
}
