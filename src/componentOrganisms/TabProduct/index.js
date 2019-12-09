import React from 'react'
import {
	TabProduct,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_ICON,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
} from './TabProduct'
import { profileTabs } from './utils'

const TabProductPropedProfile = profileTabs.map(tab => {
	const {
		[TAB_PRODUCT_PRICE]: price,
		[TAB_PRODUCT_DESCRIPTION]: description,
		[TAB_PRODUCT_ICON]: icon,
		[TAB_PRODUCT_NUM_ORDERS]: orders,
	} = tab
	return (
		<TabProduct
			price={price}
			description={description}
			icon={icon}
			orders={orders}
		/>
	)
})

export { TabProductPropedProfile }
