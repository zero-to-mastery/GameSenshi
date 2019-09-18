import React, { Fragment } from 'react'
import { DropdownMenu, DropdownItem } from 'reactstrap'

import { ExportProton } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(ExportProton)

const DROP_DOWN_MENU_NAVBAR_PROPS_TO = 'to'
const DROP_DOWN_MENU_NAVBAR_PROPS_BODY = 'body'
const DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER = 'divider'

const DropdownMenuNavbar = props => {
	const { items } = props
	return (
		<DropdownMenu aria-labelledby='navbarDropdownMenuLink' right>
			{items.map(item => {
				const { to, body, divider } = item

				return (
					<Fragment key={body}>
						<DropdownItem
							to={to}
							tag={Link}
							className='text-dark mt-0 py-1 px-4'
							style={{ fontSize: '1rem' }}>
							{body}
						</DropdownItem>
						{divider && <DropdownItem divider />}
					</Fragment>
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
}
