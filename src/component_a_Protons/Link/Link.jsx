import React from 'react'
import createLinkNoStack from 'react-router-link-nostack'
import { Link as Link1, withRouter } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'

const LinkNoBase = createLinkNoStack(Link1, withRouter)

const Link = props => {
	const { baseClass, baseStyle, to, href, children, ...otherProps } = props
	return (
		<ButtonBase component='span' className={baseClass} style={baseStyle}>
			{to && (
				<LinkNoBase to={to} {...otherProps}>
					{children}
				</LinkNoBase>
			)}
			{!to && href && (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href={href}
					{...otherProps}
				>
					{children}
				</a>
			)}
		</ButtonBase>
	)
}

export { Link, LinkNoBase }
