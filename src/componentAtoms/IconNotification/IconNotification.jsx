import React, { memo } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const ICON_NOTIFICATION_STATE_SIGNED_IN = 'signedIn'

const IconNotification = memo(props => {
	const {
		[ICON_NOTIFICATION_STATE_SIGNED_IN]: signedIn,
		onClick,
		small,
		to,
		className,
	} = props
	return (
		signedIn && (
			<NavItem className={`active ${small && 'navbar-toggler'} ${className}`}>
				<NavLink tag={Link} to={to} onClick={onClick} rel='noopener noreferrer'>
					<i aria-hidden={true} className='tim-icons icon-bell-55' />
				</NavLink>
			</NavItem>
		)
	)
})

export { IconNotification, ICON_NOTIFICATION_STATE_SIGNED_IN }
