import React from 'react'
import { ButtonsSocialAuth } from 'componentAtoms/ButtonsSocialAuth/ButtonsSocialAuth'
import { buttonSocialAuthOnClicks } from 'componentAtoms/ButtonsSocialAuth/utils'
// routing
import { withLastLocation } from 'routes'

const ButtonsSocialAuthPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	return (
		<ButtonsSocialAuth
			onClicks={buttonSocialAuthOnClicks(lastLocation)}
			{...restProps}
		/>
	)
})

export { ButtonsSocialAuth, ButtonsSocialAuthPropedDefault }
