import React from 'react'
import { TabProduct } from './TabProduct'
import { profileTabs } from './utils'

const TabProductPropedGame = props => {
	return <TabProduct tabs={profileTabs} {...props} />
}

export { TabProductPropedGame }
