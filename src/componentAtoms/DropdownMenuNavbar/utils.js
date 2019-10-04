import React from 'react'
import {
	DROP_DOWN_MENU_NAVBAR_PROPS_TO,
	DROP_DOWN_MENU_NAVBAR_PROPS_BODY,
	DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER,
	DROP_DOWN_MENU_NAVBAR_ON_CLICK,
} from 'componentAtoms/DropdownMenuNavbar/DropdownMenuNavbar'
import {
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_PROFILE,
} from 'routes'
import { storeUser, STATE, STORE_USER_STATE_DISPLAY_NAME } from 'state'
import { auth } from 'firebaseInit'

const signOut = () => {
	auth().signOut()
}

const NavbarIndexItems = () => [
	{
		[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: ROUTE_PAGE_PROFILE,
		[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: (
			<strong>
				{storeUser[STATE][STORE_USER_STATE_DISPLAY_NAME]} Welcome!
			</strong>
		),
		[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: true,
	},
	{
		[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: ROUTE_PAGE_APPOINTMENTS,
		[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: 'My Appointments',
		[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: true,
	},
	{
		[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: ROUTE_PAGE_SETTINGS_GENERAL,
		[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: 'Settings',
		[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: false,
	},
	{
		[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: ROUTE_PAGE_HELP,
		[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: 'Help',
		[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: false,
	},
	{
		[DROP_DOWN_MENU_NAVBAR_PROPS_TO]: '#',
		[DROP_DOWN_MENU_NAVBAR_PROPS_BODY]: 'Sign Out',
		[DROP_DOWN_MENU_NAVBAR_PROPS_DIVIDER]: false,
		[DROP_DOWN_MENU_NAVBAR_ON_CLICK]: signOut,
	},
]

export { NavbarIndexItems }
