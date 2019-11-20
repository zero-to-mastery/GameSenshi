import React from 'react'
import classnames from 'classnames'

const Section = props => {
	const { className, ...otherProps } = props
	return <div className={classnames('section pt-3 pb-3', className)} {...otherProps} />
}

export { Section }
