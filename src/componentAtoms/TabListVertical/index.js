import React from 'react'
import { TabListVertical } from 'componentAtoms/TabListVertical/TabListVertical'
import { settingPageTabList } from 'componentAtoms/TabListVertical/utils'
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
