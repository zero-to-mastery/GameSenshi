import React from 'react'
import { DropdownMenuNavbar } from './DropdownMenuNavbar'
import { StateContainer, storeUser } from 'state'
import { NavbarIndexItems } from './utils'

const DropdownMenuNavbarStoreUser = StateContainer(
	DropdownMenuNavbar,
	[storeUser],
	[],
	[]
)

const DropdownMenuNavbarStoreUserPropedNavbar = props => {
	return <DropdownMenuNavbarStoreUser items={NavbarIndexItems()} {...props} />
}

export { DropdownMenuNavbarStoreUserPropedNavbar }
