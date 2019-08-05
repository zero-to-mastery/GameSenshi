import React from 'react'
import { TabListVertical } from 'componentAtoms/TabListVertical/TabListVertical'
import { settingPageTabList } from 'componentAtoms/TabListVertical/utils'

const TabListVerticalPropedSettingPage = props => {
	return <TabListVertical navItems={settingPageTabList} {...props} />
}

export { TabListVerticalPropedSettingPage }
