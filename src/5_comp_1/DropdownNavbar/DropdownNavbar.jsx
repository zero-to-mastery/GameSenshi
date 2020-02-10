import React from 'react'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap'

const { Link, Image } = stopUndefined(Exports)
const DROPDOWN_NAVBAR_STATE_SHOW = 'show'
const DROPDOWN_NAVBAR_STATE_AVATAR = 'avatar'

const DropdownNavbar = props => {
	const {
		[DROPDOWN_NAVBAR_STATE_AVATAR]: avatar,
		[DROPDOWN_NAVBAR_STATE_SHOW]: show,
		children,
	} = props

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
					<Image
						alt='user avatar'
						className='img-raised media avatar'
						style={{ height: 36, width: 36 }}
						src={avatar}
						loading={null} // Image's loader is too big, need to find better component
					/>
				</DropdownToggle>
				{children}
			</UncontrolledDropdown>
		)
	)
}
export {
	DropdownNavbar,
	DROPDOWN_NAVBAR_STATE_SHOW,
	DROPDOWN_NAVBAR_STATE_AVATAR,
}
