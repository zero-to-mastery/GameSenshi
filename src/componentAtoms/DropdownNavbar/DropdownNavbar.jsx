import React from 'react'
import { ExportProton } from 'componentaProton'
import { stopUndefined } from 'utils'
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap'

const { Link } = stopUndefined(ExportProton)
const DROPDOWN_NAVBAR_STATE_SHOW = 'show'

const DropdownNavbar = props => {
	const { avatar, menu, [DROPDOWN_NAVBAR_STATE_SHOW]: show } = props

	const show_ = show !== undefined ? show : true

	return (
		show_ && (
			<UncontrolledDropdown // user menu bar
				nav
				className='d-none d-lg-inline-flex'>
				<DropdownToggle
					caret
					color='default'
					data-toggle='dropdown'
					tag={Link}
					to='#'
					id='navbarDropdownMenuLink'
					className='d-flex align-items-center pt-0 pb-0'>
					{avatar}
				</DropdownToggle>
				{menu}
			</UncontrolledDropdown>
		)
	)
}
export { DropdownNavbar, DROPDOWN_NAVBAR_STATE_SHOW }
