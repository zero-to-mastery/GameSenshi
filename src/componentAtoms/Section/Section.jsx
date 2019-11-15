import React from 'react'
import classNames from 'classnames'

const Section = props => {
	const { className, ...otherProps } = props
	return (
		<div
			className={classNames('section pt-3 pb-3', className)}
			{...otherProps}
		/>
	)
}

export { Section }
