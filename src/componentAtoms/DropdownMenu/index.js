import React from 'react'
import { DropdownMenu } from 'componentAtoms/DropdownMenu/DropdownMenu'
import { StateContainer, storeUser } from 'state'
import { NavbarIndexItems } from 'componentAtoms/DropdownMenu/utils'

const DropdownMenuStoreUser = StateContainer(DropdownMenu, [storeUser], [], [])

const DropdownMenuStoreUserPropedNavbarIndex = props => {
	return <DropdownMenuStoreUser items={NavbarIndexItems} {...props} />
}

export { DropdownMenuStoreUserPropedNavbarIndex }
