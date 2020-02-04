import React from 'react'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from '1_utils'
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap'

const { Link } = stopUndefined(Exports)
const DROPDOWN_NAVBAR_STATE_SHOW = 'show'

const DropdownNavbar = props => {
	const { avatar: Avatar, [DROPDOWN_NAVBAR_STATE_SHOW]: show, children } = props

	const show_ = show !== undefined ? show : true

	return (
		show_ && (
			<UncontrolledDropdown // user menu bar
				nav
				className='d-none d-lg-inline-flex'
			>
				<DropdownToggle
					caret
					color='default'
					data-toggle='dropdown'
					tag={Link}
					to='#'
					id='navbarDropdownMenuLink'
					className='d-flex align-items-center py-0'
				>
					<Avatar />
				</DropdownToggle>
				{children}
			</UncontrolledDropdown>
		)
	)
}
export { DropdownNavbar, DROPDOWN_NAVBAR_STATE_SHOW }
