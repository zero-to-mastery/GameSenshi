import React, { memo } from 'react'
import { useLocation } from '2_routes'
import { NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Link, Button } = stopUndefined(Exports)

const BUTTON_SIGN_IN_STATE_SHOW = 'show'

// ! this component is too specialize, need to merge into ButtonCommon

const ButtonSignInUp = memo(props => {
	const { pathname } = useLocation()
	const {
		buttonClass,
		small,
		navItemClass,
		to,
		children,
		[BUTTON_SIGN_IN_STATE_SHOW]: show,
	} = props
	return (
		show &&
		pathname.toLowerCase() !== to.toLowerCase() && (
			<NavItem
				className={classnames(navItemClass, { 'navbar-toggler': small })}
			>
				<NavLink className='p-0' data-placement='bottom' to={to} tag={Link}>
					<Button className={buttonClass} color='primary' type='button'>
						{children}
					</Button>
				</NavLink>
			</NavItem>
		)
	)
})

export { ButtonSignInUp, BUTTON_SIGN_IN_STATE_SHOW }
