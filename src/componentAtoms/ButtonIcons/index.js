import React, { useMemo } from 'react'
import {
	ButtonIcons,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
} from './ButtonIcons'
import { buttonSocialAuthOnClick, buttonSocialAuths, getButtons } from './utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsSocialsPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonSocialAuthOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonIcons onClick={onClick} buttons={buttonSocialAuths} {...restProps} />
	)
})

const ButtonsSocialOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtons(buttons), [buttons])
	return <ButtonIcons buttons={buttons_} {...otherProps} />
}

export {
	ButtonsSocialsPropedAuth,
	ButtonsSocialOptioned,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
}
