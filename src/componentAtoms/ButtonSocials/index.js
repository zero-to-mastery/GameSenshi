import React from 'react'
import {
	ButtonSocials,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
} from './ButtonSocials'
import { buttonSocialAuthOnClicks, buttonAuths } from './utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsSocialPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	return (
		<ButtonSocials
			onClicks={buttonSocialAuthOnClicks(lastLocation)}
			buttons={buttonAuths}
			{...restProps}
		/>
	)
})

export {
	ButtonsSocialPropedAuth,
	ButtonSocials,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
}
