import React, { memo } from 'react'
//route
import { ROUTE_PAGE_INDEX } from 'routes'
import {
	NavbarBravnd,
	NAVBAR_BRAND_ON_ERROR,
} from 'componentAtoms/NavbarBrand/NavbarBrand'
// logo
import logo from 'assets/img/favicon.ico'
// state
import { StateContainer, storeUser, storeUserResetAvatar } from 'state'

const NavbarBravndPropedIndex = memo(props => {
	return <NavbarBravnd logo={logo} to={ROUTE_PAGE_INDEX} />
})

const mapStoreAlertMethodToProp = {
	[NAVBAR_BRAND_ON_ERROR]: storeUserResetAvatar,
}

const NavbarBravndPropedIndexStoreUser = StateContainer(
	NavbarBravndPropedIndex,
	[storeUser],
	[],
	[mapStoreAlertMethodToProp]
)

export { NavbarBravndPropedIndexStoreUser }
