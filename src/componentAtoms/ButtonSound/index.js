import React from 'react'
import { ButtonSound } from './ButtonSound'
import classnames from 'classnames'

const ButtonSoundPropedGender = props => {
	const { gender, ...otherProps } = props
	return (
		<ButtonSound
			color={classnames({
				primary: gender,
				success: !gender,
			})}
			{...otherProps}
		/>
	)
}

export { ButtonSoundPropedGender }
