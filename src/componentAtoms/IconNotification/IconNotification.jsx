import React, { memo } from 'react'
import { NavItem, NavLink } from 'reactstrap'

import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(Exports)

const ICON_NOTIFICATION_STATE_SIGNED_IN = 'signedIn'

const IconNotification = memo(props => {
	const {
		[ICON_NOTIFICATION_STATE_SIGNED_IN]: signedIn,
		small,
		to,
		className,
	} = props
	return (
		signedIn && (
			<NavItem className={`active ${small && 'navbar-toggler'} ${className}`}>
				<NavLink tag={Link} to={to}>
					<i aria-hidden={true} className='tim-icons icon-bell-55' />
				</NavLink>
			</NavItem>
		)
	)
})

export { IconNotification, ICON_NOTIFICATION_STATE_SIGNED_IN }
