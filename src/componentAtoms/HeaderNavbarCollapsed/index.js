import React from 'react'
import { HeaderNavbarCollapsed } from 'componentAtoms/HeaderNavbarCollapsed/HeaderNavbarCollapsed'
import { ROUTE_PAGE_INDEX } from 'routes'

const HeaderNavbarCollapsedPropedNavbarIndex = props => {
	return (
		<HeaderNavbarCollapsed to={ROUTE_PAGE_INDEX} {...props}>
			GAME SENSHI
		</HeaderNavbarCollapsed>
	)
}

export { HeaderNavbarCollapsedPropedNavbarIndex }
