import React from 'react'
import {
	TabListVertical,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
} from './TabListVertical'
import { useLocation } from 'routes'

const TabListVerticalPropedWithRouter = props => {
	const { pathname } = useLocation()
	const { tablist } = props
	return <TabListVertical pathname={pathname} tablist={tablist} {...props} />
}

export {
	TabListVerticalPropedWithRouter,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
}
