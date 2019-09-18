import React, { memo } from 'react'
import { ROUTE_PAGE_INDEX } from 'routes'
import {
	BrandNavbar,
	NAVBAR_BRAND_ON_ERROR,
} from 'componentAtoms/BrandNavbar/BrandNavbar'
import logo from 'assets/img/favicon.ico'
import { StateContainer, storeUser, storeUserResetAvatar } from 'state'

const BrandNavbarPropedIndexNavbar = memo(props => {
	return (
		<BrandNavbar logo={logo} to={ROUTE_PAGE_INDEX} {...props}>
			GAME SENSHI
		</BrandNavbar>
	)
})

const mapStoreUserMethodToProp = {
	[NAVBAR_BRAND_ON_ERROR]: storeUserResetAvatar,
}

const BrandNavbarPropedIndexNavbarStoreUser = StateContainer(
	BrandNavbarPropedIndexNavbar,
	[storeUser],
	[],
	[mapStoreUserMethodToProp]
)

export { BrandNavbarPropedIndexNavbarStoreUser }
