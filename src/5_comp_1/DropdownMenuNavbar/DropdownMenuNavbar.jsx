import React from 'react'
import { DropdownMenu, DropdownItem } from 'reactstrap'

import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'

const { Link } = stopUndefined(Exports)

const DROP_DOWN_MENU_NAVBAR_PROPS_TO = 'to'
const DROP_DOWN_MENU_NAVBAR_PROPS_BODY = 'body'
const DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER = 'divider'
const DROP_DOWN_MENU_NAVBAR_ON_CLICK = 'onClick'

const DropdownMenuNavbar = props => {
	const { items } = props

	return (
		<DropdownMenu aria-labelledby='navbarDropdownMenuLink' right>
			{items.map(item => {
				const {
					[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: to,
					[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: body,
					[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: divider,
					[DROP_DOWN_MENU_NAVBAR_ON_CLICK]: onClick,
				} = item
				return (
					<div key={body}>
						<DropdownItem
							to={to}
							tag={Link}
							className='text-dark mt-0 py-1 px-4'
							baseClass='w-100'
							style={{ fontSize: '1rem' }}
							onClick={onClick}
						>
							{body}
						</DropdownItem>
						{divider && <DropdownItem divider />}
					</div>
				)
			})}
		</DropdownMenu>
	)
}

export {
	DropdownMenuNavbar,
	DROP_DOWN_MENU_NAVBAR_PROPS_TO,
	DROP_DOWN_MENU_NAVBAR_PROPS_BODY,
	DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER,
	DROP_DOWN_MENU_NAVBAR_ON_CLICK,
}
