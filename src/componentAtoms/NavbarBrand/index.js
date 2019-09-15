import React, { memo } from 'react'
import { ROUTE_PAGE_INDEX } from 'routes'
import { NavbarBrand, NAVBAR_BRAND_ON_ERROR } from 'componentAtoms/NavbarBrand/NavbarBrand'
import logo from 'assets/img/favicon.ico'
import { StateContainer, storeUser, storeUserResetAvatar } from 'state'

const NavbarBrandPropedNavbar = memo(props => {
	return <NavbarBrand logo={logo} to={ROUTE_PAGE_INDEX} {...props} />
})

const mapStoreUserMethodToProp = {
	[NAVBAR_BRAND_ON_ERROR]: storeUserResetAvatar,
}

const NavbarBrandPropedNavbarStoreUser = StateContainer(
	NavbarBrandPropedNavbar,
	[storeUser],
	[],
	[mapStoreUserMethodToProp]
)

export { NavbarBrandPropedNavbarStoreUser }
