import React from 'react'
import { DropdownMenuNavbar } from 'componentAtoms/DropdownMenuNavbar/DropdownMenuNavbar'
import { StateContainer, storeUser } from 'state'
import { NavbarIndexItems } from 'componentAtoms/DropdownMenuNavbar/utils'

const DropdownMenuNavbarStoreUser = StateContainer(
	DropdownMenuNavbar,
	[storeUser],
	[],
	[]
)

const DropdownMenuNavbarStoreUserPropedNavbarIndex = props => {
	return <DropdownMenuNavbarStoreUser items={NavbarIndexItems()} {...props} />
}

export { DropdownMenuNavbarStoreUserPropedNavbarIndex }
