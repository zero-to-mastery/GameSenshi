import React from 'react'
import { HeaderCollapsed } from './HeaderCollapsed'
import { ROUTE_PAGE_INDEX } from 'routes'

const HeaderCollapsedPropedNavbarIndex = props => {
	return (
		<HeaderCollapsed to={ROUTE_PAGE_INDEX} {...props}>
			GAME SENSHI
		</HeaderCollapsed>
	)
}

export { HeaderCollapsedPropedNavbarIndex }
