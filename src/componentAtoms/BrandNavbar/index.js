import React, { memo } from 'react'
import { ROUTE_PAGE_INDEX } from 'routes'
import { BrandNavbar, NAVBAR_BRAND_ON_ERROR } from './BrandNavbar'
import logo from 'assets/img/favicon.ico'
import { StateContainer, storeUser, storeUserResetAvatar } from 'state'

const BrandNavbarStoreUserPropedNavbar = memo(props => {
	return (
		<BrandNavbarStoreUser logo={logo} to={ROUTE_PAGE_INDEX} {...props}>
			GAME SENSHI
		</BrandNavbarStoreUser>
	)
})

const mapStoreUserMethodToProp = {
	[NAVBAR_BRAND_ON_ERROR]: storeUserResetAvatar,
}

const BrandNavbarStoreUser = StateContainer(
	BrandNavbar,
	[storeUser],
	[],
	[mapStoreUserMethodToProp]
)

export { BrandNavbarStoreUserPropedNavbar }
