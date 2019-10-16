import React from 'react'
import { ButtonSocials } from './ButtonSocials'
import { buttonSocialAuthOnClicks, buttonAuths, buttonStreams } from './utils'
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

// !TODO onClicks functionality
const ButtonsSocialPropedStreams = props => {
	return <ButtonSocials onClicks={[]} buttons={buttonStreams} {...props} />
}
export { ButtonsSocialPropedStreams, ButtonsSocialPropedAuth }
