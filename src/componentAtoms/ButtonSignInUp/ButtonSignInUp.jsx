import React, { memo } from 'react'
import { Link, withRouter } from 'react-router-dom'
// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const BUTTON_SIGN_IN_STATE_SIGNED_IN = 'signedIn'

const ButtonSignInUp = withRouter(
	memo(props => {
		const {
			buttonClass,
			small,
			navItemClass,
			to,
			children,
			[BUTTON_SIGN_IN_STATE_SIGNED_IN]: signedIn,
			location: { pathname },
		} = props
		return (
			!signedIn &&
			pathname.toLowerCase() !== to.toLowerCase() && (
				<NavItem className={`${navItemClass} ${small && 'navbar-toggler'}`}>
					<NavLink className='p-0' data-placement='bottom' to={to} tag={Link}>
						<Button className={buttonClass} color='primary' type='button'>
							{children}
						</Button>
					</NavLink>
				</NavItem>
			)
		)
	})
)

export { ButtonSignInUp, BUTTON_SIGN_IN_STATE_SIGNED_IN }
