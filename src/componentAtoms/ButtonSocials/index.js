import React, { useMemo } from 'react'
import {
	ButtonSocials,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
} from './ButtonSocials'
import { buttonSocialAuthOnClick, buttonSocialAuths, getButtons } from './utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsSocialsPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonSocialAuthOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonSocials
			onClick={onClick}
			buttons={buttonSocialAuths}
			{...restProps}
		/>
	)
})

const ButtonsSocialOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtons(buttons), [buttons])
	return <ButtonSocials buttons={buttons_} {...otherProps} />
}

export {
	ButtonsSocialsPropedAuth,
	ButtonsSocialOptioned,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
}
