import React from 'react'
import classnames from 'classnames'
import { ButtonSubmit } from './ButtonSubmit'

const ButtonSubmitPropedRound = props => {
	const { className, ...otherProps } = props
	return (
		<ButtonSubmit
			baseStyle={{
				borderWidth: 1,
				borderRadius: 30,
			}}
			className={classnames('btn-round', className)}
			{...otherProps}
		/>
	)
}

export { ButtonSubmit, ButtonSubmitPropedRound }
