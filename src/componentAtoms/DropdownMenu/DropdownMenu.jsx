import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownMenu as Dropdown, DropdownItem } from 'reactstrap'

const DROP_DOWN_MENU_PROPS_TO = 'to'
const DROP_DOWN_MENU_PROPS_BODY = 'body'
const DROP_DOWN_MENU_PROPS_DIVIDER = 'divider'

const DropdownMenu = props => {
	const { items } = props
	return (
		<Dropdown aria-labelledby='navbarDropdownMenuLink' right>
			{items.map(item => {
				const { to, body, divider } = item
				return (
					<>
						<DropdownItem
							to={to}
							tag={Link}
							className='text-dark mt-0 py-1 px-4'
							style={{ fontSize: '1rem' }}>
							{body}
						</DropdownItem>
						{divider && <DropdownItem divider />}
					</>
				)
			})}
		</Dropdown>
	)
}

export {
	DropdownMenu,
	DROP_DOWN_MENU_PROPS_TO,
	DROP_DOWN_MENU_PROPS_BODY,
	DROP_DOWN_MENU_PROPS_DIVIDER,
}
