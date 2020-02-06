import React from 'react'
import clsx from 'clsx'

const Section = props => {
	const { className, ...otherProps } = props
	return (
		<div className={clsx('section py-3', className)} {...otherProps} />
	)
}

export { Section }
