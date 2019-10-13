import React from 'react'
import { TabListVertical } from './TabListVertical'
import { settingPageTabList } from './utils'
import { withRouter } from 'react-router-dom'

const TabListVerticalPropedSettingPage = withRouter(props => {
	const {
		location: { pathname },
	} = props
	return (
		<TabListVertical
			pathname={pathname}
			navItems={settingPageTabList}
			{...props}
		/>
	)
})

export { TabListVerticalPropedSettingPage }
