import React from 'react'
import { UncontrolledTooltip as UncontrolledTooltip1 } from 'reactstrap'

const UncontrolledTooltip = props => {
	const { children } = props
	return children ? <UncontrolledTooltip1 {...props} /> : null
}

export { UncontrolledTooltip }
