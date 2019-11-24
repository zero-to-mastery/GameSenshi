import React from 'react'
import createLinkNoStack from 'react-router-link-nostack'
import { Link as Link1, withRouter } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'

const LinkNoBase = createLinkNoStack(Link1, withRouter)

const Link = props => {
	const { baseClass, baseStyle, ...otherProps } = props
	return (
		<ButtonBase component='span' className={baseClass} style={baseStyle}>
			<LinkNoBase {...otherProps} />
		</ButtonBase>
	)
}

export { Link, LinkNoBase }
