import React from 'react'
import createLinkNoStack from 'react-router-link-nostack'
import { Link as Link1, withRouter } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'

const LinkNoBase = createLinkNoStack(Link1, withRouter)

const Link = props => {
	return (
		<ButtonBase component='span'>
			<LinkNoBase {...props} />
		</ButtonBase>
	)
}

export { Link, LinkNoBase }
